# Smart Asset Import Implementation

## Overview

The Smart Asset Import feature provides a comprehensive, step-by-step interface for importing assets from spreadsheet files (CSV, XLSX, XLS) with intelligent field mapping, conflict detection, and resolution capabilities.

## Features

### 1. **File Upload**
- Drag-and-drop file upload interface
- Support for CSV, XLSX, and XLS formats
- File size validation (max 10MB)
- Real-time upload progress tracking
- Template download functionality

### 2. **Spreadsheet Analysis**
- Automatic header detection
- Sample data preview
- Field mapping suggestions with confidence scores
- Required field validation
- Analysis confidence scoring

### 3. **Field Mapping**
- Interactive field mapping interface
- System field suggestions based on column names
- Confidence indicators for mapping accuracy
- Required field highlighting
- Mapping validation before proceeding

### 4. **Conflict Detection & Resolution**
- Duplicate asset detection
- Missing location validation
- Invalid status checking
- Data quality assessment
- Interactive conflict resolution with multiple action options:
  - Skip row
  - Update with new value
  - Ignore and proceed
  - Create new record

### 5. **Import Execution**
- Real-time progress tracking
- Live metrics display
- Error handling and reporting
- Import summary with success rates
- Error report download functionality

## API Endpoints

The implementation uses the following backend endpoints:

### 1. File Upload
```
POST /api/assets/import/upload
```
- Accepts multipart form data with file
- Returns: `{ file_id, original_name, size, uploaded_at }`

### 2. Analyze Spreadsheet
```
POST /api/assets/import/analyze
```
- Input: `{ file_id }`
- Returns: `{ headers, sample, mapping_suggestions, confidence, missing_required_fields }`

### 3. Field Mappings
```
GET /api/assets/import/mappings/{file_id}
PUT /api/assets/import/mappings/{file_id}
```
- Get current mappings or save user-defined mappings
- Returns: `{ mappings, user_overrides }`

### 4. Conflict Detection
```
POST /api/assets/import/conflicts/{file_id}
```
- Analyzes mapped data for conflicts
- Returns: `{ conflicts: { group: [ { row, value, issue } ] } }`

### 5. Conflict Resolution
```
POST /api/assets/import/resolve-conflicts/{file_id}
```
- Input: `{ resolutions }`
- Stores user resolutions for conflicts

### 6. Import Execution
```
POST /api/assets/import/execute/{file_id}
```
- Executes the final import with all mappings and resolutions
- Returns: `{ imported, skipped, errors, error_report_url }`

### 7. Progress Tracking
```
GET /api/assets/import/progress/{file_id}
```
- Returns current import status and metrics

### 8. Template Download
```
GET /api/assets/import/template
```
- Serves downloadable template file

## Component Structure

### Main Components

1. **SmartImportComponent** (`smart-import.component.ts`)
   - Main orchestrator component
   - Manages step navigation and data flow
   - Handles overall import state

2. **UploadStepComponent** (`upload-step/`)
   - File upload interface
   - Drag-and-drop functionality
   - File validation and progress tracking

3. **AnalyzeStepComponent** (`analyze-step/`)
   - Spreadsheet analysis display
   - Header and sample data preview
   - Field mapping suggestions

4. **FieldMappingStepComponent** (`field-mapping-step/`)
   - Interactive field mapping interface
   - System field selection
   - Mapping validation

5. **ConflictResolutionStepComponent** (`conflict-resolution-step/`)
   - Conflict detection and display
   - Resolution options interface
   - Conflict grouping and management

6. **ImportExecutionStepComponent** (`import-execution-step/`)
   - Import progress tracking
   - Real-time metrics display
   - Results summary and actions

### Services

1. **AssetImportService** (`asset-import.service.ts`)
   - Central service for all import-related API calls
   - TypeScript interfaces for type safety
   - Helper methods for UI components

## Data Models

### Key Interfaces

```typescript
interface ImportSession {
  file_id: string;
  original_name: string;
  size: number;
  uploaded_at: string;
  status: 'uploaded' | 'analyzing' | 'mapped' | 'conflicts_detected' | 'resolved' | 'importing' | 'completed' | 'failed';
  meta?: any;
}

interface FieldMapping {
  columnName: string;
  systemField: string;
  confidence: 'High' | 'Medium' | 'Low';
  confidenceReason: string;
  isRequired: boolean;
  isMapped: boolean;
}

interface ImportConflict {
  type: 'duplicate' | 'missing_location' | 'invalid_status' | 'missing_required' | 'data_quality';
  row: number;
  field: string;
  message: string;
  suggestedFix?: string;
  severity: 'error' | 'warning';
  value?: any;
}

interface ConflictResolution {
  row: number;
  field: string;
  action: 'skip' | 'update' | 'create' | 'ignore';
  value?: any;
}
```

## Usage

### Accessing Smart Import

1. Navigate to the Assets page
2. Click the menu button (three dots)
3. Select "Smart Import"
4. Or directly navigate to `/assets/import`

### Import Process

1. **Upload**: Drag and drop or select a spreadsheet file
2. **Analyze**: Review detected headers and field mappings
3. **Map Fields**: Connect spreadsheet columns to system fields
4. **Resolve Conflicts**: Address any detected issues
5. **Import**: Execute the import and view results

## File Requirements

### Supported Formats
- CSV (.csv)
- Excel (.xlsx, .xls)

### File Size
- Maximum: 10MB

### Required Columns
- Asset Name
- Asset ID
- Category
- Location

### Recommended Structure
- First row should contain column headers
- Data should start from the second row
- Use consistent formatting for dates and numbers

## Error Handling

### Validation Errors
- File format validation
- File size validation
- Required field validation
- Data type validation

### Import Errors
- Duplicate asset detection
- Invalid location references
- Missing required data
- Data format issues

### User Feedback
- Real-time error messages
- Progress indicators
- Success/failure notifications
- Detailed error reports

## Styling

The implementation uses Tailwind CSS for styling with:
- Responsive design
- Modern UI components
- Consistent color scheme
- Smooth transitions and animations
- Accessibility considerations

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript support
- File API support for drag-and-drop
- FormData API for file uploads

## Security Considerations

- File type validation
- File size limits
- Authentication required for all endpoints
- CSRF protection
- Input sanitization

## Performance

- Chunked file uploads for large files
- Progress tracking for long operations
- Optimistic UI updates
- Efficient conflict detection algorithms

## Future Enhancements

1. **Batch Processing**: Support for multiple file imports
2. **Scheduled Imports**: Automated import scheduling
3. **Advanced Mapping**: Machine learning-based field mapping
4. **Data Validation**: Custom validation rules
5. **Import Templates**: User-defined import templates
6. **Integration**: Third-party system integrations
7. **Audit Trail**: Detailed import history and tracking

## Troubleshooting

### Common Issues

1. **File Upload Fails**
   - Check file size (max 10MB)
   - Verify file format (CSV, XLSX, XLS)
   - Ensure network connectivity

2. **Field Mapping Issues**
   - Review column headers for clarity
   - Check for special characters in headers
   - Verify required fields are present

3. **Import Errors**
   - Review conflict resolution settings
   - Check data format consistency
   - Verify location and category references

4. **Performance Issues**
   - Reduce file size for large datasets
   - Check network connection
   - Clear browser cache if needed

## Support

For technical support or feature requests, please refer to the project documentation or contact the development team. 