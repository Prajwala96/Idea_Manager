import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idea-manager-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './idea-manager-dashboard.html',
  styleUrl: './idea-manager-dashboard.css'
})
export class IdeaManagerDashboard {
  @Input() user: { username: string; displayName: string } | null = null;
  @Output() logout = new EventEmitter<void>();

  statusTabs = [
    'Pre-Approval',
    'Submitted for Review/ Approval',
    'Approved/ Declined/ Cancelled',
    'Implementation',
    'Complete',
  ];

  tableColumns = [
    'Idea No.',
    'Name',
    'Internal Initiative',
    'Team',
    'Status',
    'Created By/ Proposed By',
    'Created Date',
    'Status Change Date',
    'Last Modified Date',
  ];

  activeTab = 'Pre-Approval';
  ideaFilter = 'MY IDEAS';
  searchQuery = '';
  selectedRows: number[] = [];
  loading = false;

  // ── Hardcoded ideas ──────────────────────────────────────
  ideas = [
    {
      id: 1,
      ideaNo: 'IDEA-001',
      name: 'Automate Reporting',
      internalInitiative: 'Yes',
      team: 'NTT DATA',
      status: 'Pre-Approval',
      createdBy: 'admin',
      createdDate: '2024-01-10',
      statusChangeDate: '2024-01-12',
      lastModifiedDate: '2024-01-15',
    },
    {
      id: 2,
      ideaNo: 'IDEA-002',
      name: 'AI Chatbot Integration',
      internalInitiative: 'No',
      team: 'NTT DATA',
      status: 'Pre-Approval',
      createdBy: 'admin',
      createdDate: '2024-02-01',
      statusChangeDate: '2024-02-05',
      lastModifiedDate: '2024-02-10',
    },
    {
      id: 3,
      ideaNo: 'IDEA-003',
      name: 'Cloud Migration Plan',
      internalInitiative: 'Yes',
      team: 'NTT DATA',
      status: 'Submitted for Review/ Approval',
      createdBy: 'admin',
      createdDate: '2024-03-01',
      statusChangeDate: '2024-03-05',
      lastModifiedDate: '2024-03-10',
    },
    {
      id: 4,
      ideaNo: 'IDEA-004',
      name: 'DevOps Automation',
      internalInitiative: 'Yes',
      team: 'NTT DATA',
      status: 'Implementation',
      createdBy: 'admin',
      createdDate: '2024-04-01',
      statusChangeDate: '2024-04-05',
      lastModifiedDate: '2024-04-10',
    },
  ];

  constructor(private router: Router) {}

  get filteredIdeas() {
    return this.ideas.filter((idea) => {
      const matchesTab = idea.status === this.activeTab;
      const matchesSearch = this.searchQuery
        ? idea.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          idea.ideaNo.toLowerCase().includes(this.searchQuery.toLowerCase())
        : true;
      return matchesTab && matchesSearch;
    });
  }

  handleSelectAll(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.selectedRows = checked ? this.filteredIdeas.map((i) => i.id) : [];
  }

  handleSelectRow(id: number) {
    this.selectedRows = this.selectedRows.includes(id)
      ? this.selectedRows.filter((r) => r !== id)
      : [...this.selectedRows, id];
  }

  isSelected(id: number): boolean {
    return this.selectedRows.includes(id);
  }

  navigateToPostIdea() {
    this.router.navigate(['/post-idea']);
  }

  onLogout() {
    this.logout.emit();
  }
}