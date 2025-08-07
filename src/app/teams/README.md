# Teams Module

This module provides team management functionality for the AssetGo application.

## Features

- **Team List**: View all teams with search, filtering, and sorting capabilities
- **Team Creation**: Create new teams with name and description
- **Team Editing**: Update existing team information
- **Team Deletion**: Delete teams with confirmation modal
- **Statistics**: Display team statistics including total teams, members, and averages
- **Responsive Design**: Grid and list view options with mobile-friendly interface

## Components

### TeamListComponent
- **Purpose**: Main component for displaying and managing teams
- **Features**:
  - Grid and list view modes
  - Search functionality
  - Sorting by name, created date, members count, and description
  - Statistics dashboard
  - Team actions (view, edit, delete)
  - Responsive design

### TeamFormComponent
- **Purpose**: Form for creating and editing teams
- **Features**:
  - Create new teams
  - Edit existing teams
  - Form validation
  - Loading states
  - Error handling

### TeamDeleteConfirmationModalComponent
- **Purpose**: Modal for confirming team deletion
- **Features**:
  - Confirmation dialog
  - Required reason for deletion
  - Backdrop click to close
  - Form validation

## Services

### TeamService
Provides API communication for team operations:

- `getTeams()`: Fetch all teams
- `getTeam(id)`: Fetch specific team
- `createTeam(data)`: Create new team
- `updateTeam(id, data)`: Update existing team
- `deleteTeam(id)`: Delete team
- `getTeamMembers(teamId)`: Get team members
- `inviteTeamMember(teamId, data)`: Invite member to team
- `resendInvitation(data)`: Resend invitation
- `getTeamStatistics()`: Get team statistics
- `getAvailableRoles()`: Get available roles for team members

## Routes

- `/teams` - Team list (default)
- `/teams/create` - Create new team
- `/teams/edit/:id` - Edit existing team

## API Integration

The module integrates with the following backend endpoints:

- `GET /api/teams` - Get all teams
- `GET /api/teams/{id}` - Get specific team
- `POST /api/teams` - Create team
- `PUT /api/teams/{id}` - Update team
- `DELETE /api/teams/{id}` - Delete team
- `GET /api/teams/{id}/members` - Get team members
- `POST /api/teams/{id}/invite` - Invite team member
- `POST /api/teams/resend-invitation` - Resend invitation
- `GET /api/teams/statistics` - Get team statistics
- `GET /api/teams/available-roles` - Get available roles

## Usage

```typescript
// Import the module
import { TeamsModule } from './teams/teams.module';

// Import components
import { TeamListComponent } from './teams/team-list/team-list.component';
import { TeamFormComponent } from './teams/team-form/team-form.component';

// Import services
import { TeamService } from './teams/services/team.service';
```

## Dependencies

- Angular Common Module
- Angular Forms Module
- Angular Router Module
- Tailwind CSS for styling
