# bread-world


| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/` | The home page |
| GET | `/breads` | Index page listing all places |
| GET | `/breads/new` | New form for a place |
| POST | `/breads` | Create a new place |
| GET | `/breads/:id` | Show one place in detail (Associated rants, new rant form, delete rant button) |
| GET | `/breads/:id/edit` | Edit form for a place |
| PUT | `/breads/:id` | Make changes to existing place |
| DELETE | `/breads/:id` | Delete a place |
| POST | `/breads/:id/rant` | Add rant to a place |
| DELETE | `/breads/:id/rant/:rantId` | Delete a rant |