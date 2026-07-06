# DSMB Guided Training Prototype

This is a standalone static prototype for DSMB and ISM/SO guided micro-trainings.

It does not require CROMS authentication, Angular, SQL Server, blob storage, or Logic Apps. The screens are simulated so the training flows can be designed, reviewed, and shared before wiring them into the real application.

The simulated controls now distinguish CROMS-like buttons, text entry fields, dropdowns, typeahead/lookup pickers, radio choices, uploads, and comment text areas so reviewers can assess whether each guided action transfers to the real UI.

All names, study identifiers, grant numbers, document titles, emails, and dates in this prototype are deidentified/synthetic training data. Production reference material informed layout, control behavior, and workflow structure.

## Open It

Open `index.html` in a browser.

If a browser blocks local files in your environment, serve this folder with any small static server, for example:

```bash
python3 -m http.server 8765
```

Then open:

```text
http://127.0.0.1:8765/
```

## Files

- `index.html` - standalone page shell
- `styles.css` - CROMS-matched prototype styling, local CROMS font/assets, and coachmark overlay
- `app.js` - reusable training engine and simulated screen renderer
- `data/trainings.js` - micro-training definitions
- `GITHUB_PUBLISHING.md` - GitHub upload and Pages publishing checklist

## Publish With GitHub Pages

Upload this entire folder to a GitHub repository. Keep `index.html`,
`app.js`, `styles.css`, `assets`, and `data` together at the repository root.

In GitHub:

1. Open the repository's **Settings**.
2. Select **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder.
5. Select **Save**.

GitHub will display the published website URL after deployment finishes.
See `GITHUB_PUBLISHING.md` for the complete checklist.

## Current Training Modules

- Find a DSMB or ISM/SO
- Create Safety Monitoring Entity
- Add a Study Association
- Add a DSMB Member
- Add an Ad Hoc Member
- Create a Meeting
- Build a Meeting Agenda
- Publish Meeting Notification
- Start and End a Meeting
- Upload DSMB Document
- Check Out a Document
- Check In a Document
- Initiate Document Review
- Approve Document Review
- Workflow Validation Recovery
- Report an Ad Hoc COI
- Complete and Submit COI Form
- Review a COI Submission
- Review Member Approval Package
- ISM/SO Written Email Review

## Later CROMS Integration

The training definitions use stable `targetId` values. When this is wired into the real CROMS Angular app later, the same IDs can become `data-tour-target` attributes on real buttons, rows, panels, and modals.
