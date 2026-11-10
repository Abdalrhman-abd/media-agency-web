# Public API Integration Notes

## 1. Response & Error Envelopes
- **Success Envelope:**
  ```json
  {
    "success": true,
    "data": { ... },
    "meta": { "page": 1, "limit": 12, "total": 42, "totalPages": 4 }
  }
  