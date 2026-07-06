window.DSMB_TRAININGS = [
  {
    id: 'find-entity-dsmb-member',
    title: 'Find a DSMB or ISM/SO - DSMB Member',
    group: 'Orientation',
    role: 'DSMB Member',
    route: '/dsmb/dsmb-list',
    duration: '5 steps',
    summary: 'Locate the DSMB workspace from the member home view.',
    steps: [
      {
        targetId: 'nav-safety',
        screen: 'dashboard',
        title: 'Open DSMB/ISM/SO',
        body: 'DSMB Members use the DSMB/ISM/SO tile from their streamlined home page.',
        expectedAction: 'Click Safety Monitoring Oversight',
        successState: 'DSMB list opens'
      },
      {
        targetId: 'list-search',
        screen: 'dsmb-list',
        title: 'Search the list',
        body: 'Use list search or filters to narrow the oversight entity table.',
        expectedAction: 'Click Search',
        successState: 'List is filtered'
      },
      {
        targetId: 'entity-row',
        screen: 'dsmb-list',
        title: 'Open the DSMB record',
        body: 'The entity name link opens the operational workspace.',
        expectedAction: 'Click Training DSMB Board 001',
        successState: 'DSMB Details opens'
      },
      {
        targetId: 'details-panels',
        screen: 'details',
        title: 'Review the workspace map',
        body: 'The workspace panels show the meeting, study, document, and COI areas a DSMB Member may need to review.',
        expectedAction: 'Click the panel map',
        successState: 'Workspace orientation is complete'
      },
      {
        targetId: 'view-ismso',
        screen: 'dsmb-list',
        title: 'Switch to ISM/SO when needed',
        body: 'Users with ISM/SO access can switch to the shared list in ISM/SO mode.',
        expectedAction: 'Click View ISM/SO(s)',
        successState: 'ISM/SO list opens'
      }
    ]
  },
  {
    id: 'find-entity-program-officer',
    title: 'Find a DSMB or ISM/SO - Program Officer',
    group: 'Orientation',
    role: 'Program Officer',
    route: '/dsmb/dsmb-list',
    duration: '5 steps',
    summary: 'Locate an assigned DSMB from the Program Officer home and list views.',
    steps: [
      {
        targetId: 'nav-safety',
        screen: 'dashboard',
        title: 'Open DSMB/ISM/SO',
        body: 'Program Officers see My Dashboard, Grant Manager, Study Manager, Analytics & Visualization, and DSMB/ISM/SO tiles on the home page.',
        expectedAction: 'Click DSMB/ISM/SO',
        successState: 'Program Officer DSMB list opens'
      },
      {
        targetId: 'list-search',
        screen: 'dsmb-list',
        title: 'Search assigned oversight records',
        body: 'Use the Program Officer list search to find a DSMB by board name, study number, grant number, or chair.',
        expectedAction: 'Click Search',
        successState: 'Assigned list is filtered'
      },
      {
        targetId: 'entity-row',
        screen: 'dsmb-list',
        title: 'Open the DSMB record',
        body: 'Open the assigned DSMB record from the Program Officer list view.',
        expectedAction: 'Click Training DSMB Board 001',
        successState: 'DSMB Details opens'
      },
      {
        targetId: 'details-panels',
        screen: 'details',
        title: 'Review the oversight workspace',
        body: 'Program Officers can use the workspace panels to review meetings, members, studies, documents, COI, and member approvals.',
        expectedAction: 'Click the panel map',
        successState: 'Workspace orientation is complete'
      },
      {
        targetId: 'view-ismso',
        screen: 'dsmb-list',
        title: 'Switch to ISM/SO when needed',
        body: 'Program Officers can switch from DSMB records to ISM/SO records when their assigned studies use an ISM or Safety Officer.',
        expectedAction: 'Click View ISM/SO(s)',
        successState: 'ISM/SO list opens'
      }
    ]
  },
  {
    id: 'find-entity-study-team-member',
    title: 'Find a DSMB or ISM/SO - Study Team Member',
    group: 'Orientation',
    role: 'Study Team Member',
    route: '/dsmb/dsmb-list',
    duration: '5 steps',
    summary: 'Locate DSMB and ISM/SO oversight records from the Study Team Member home view.',
    steps: [
      {
        targetId: 'nav-safety',
        screen: 'dashboard',
        title: 'Open DSMB/ISM/SO',
        body: 'Study Team Members use the DSMB/ISM/SO tile from a study-focused home page.',
        expectedAction: 'Click DSMB/ISM/SO',
        successState: 'Study Team Member DSMB list opens'
      },
      {
        targetId: 'list-search',
        screen: 'dsmb-list',
        title: 'Search study oversight records',
        body: 'Use list search to find DSMB records by study number, grant number, DSMB name, or chair.',
        expectedAction: 'Click Search',
        successState: 'Study oversight list is filtered'
      },
      {
        targetId: 'entity-row',
        screen: 'dsmb-list',
        title: 'Open the DSMB record',
        body: 'Open the DSMB record connected to the study so the oversight workspace can be reviewed.',
        expectedAction: 'Click Training DSMB Board 001',
        successState: 'DSMB Details opens'
      },
      {
        targetId: 'details-panels',
        screen: 'details',
        title: 'Review the study-facing workspace map',
        body: 'Study Team Members can use the workspace panels to orient to meetings, associated studies, documents, and COI context.',
        expectedAction: 'Click the panel map',
        successState: 'Workspace orientation is complete'
      },
      {
        targetId: 'view-ismso',
        screen: 'dsmb-list',
        title: 'Switch to ISM/SO when needed',
        body: 'Study Team Members can switch from DSMB records to ISM/SO records for studies monitored by an ISM or Safety Officer.',
        expectedAction: 'Click View ISM/SO(s)',
        successState: 'ISM/SO list opens'
      }
    ]
  },
  {
    id: 'create-entity',
    title: 'Create Safety Monitoring Entity',
    group: 'Setup',
    role: 'DSMB Manager',
    route: '/dsmb/dsmb-list',
    duration: '7 steps',
    summary: 'Create a DSMB shell and associate the first study.',
    steps: [
      {
        targetId: 'nav-safety',
        screen: 'dashboard',
        title: 'Open DSMB/ISM/SO',
        body: 'Create oversight entities from the Safety Monitoring Oversight area.',
        expectedAction: 'Click Safety Monitoring Oversight',
        successState: 'DSMB list opens'
      },
      {
        targetId: 'add-entity',
        screen: 'dsmb-list',
        title: 'Start a new entity',
        body: 'The Add action opens the Safety Monitoring Oversight Entity modal.',
        expectedAction: 'Click Add',
        successState: 'Entity modal opens'
      },
      {
        targetId: 'entity-type',
        screen: 'entity-modal',
        title: 'Choose the entity type',
        body: 'The type drives labels, role lists, and downstream workflow names.',
        expectedAction: 'Select DSMB',
        successState: 'DSMB type is selected'
      },
      {
        targetId: 'entity-name',
        screen: 'entity-modal',
        title: 'Name the entity',
        body: 'Use a recognizable oversight entity name that users can find in the list.',
        expectedAction: 'Click the Name field',
        successState: 'Name is entered'
      },
      {
        targetId: 'entity-study',
        screen: 'entity-modal',
        title: 'Associate the first study',
        body: 'Attach the first monitored study during creation.',
        expectedAction: 'Click TRAIN-STUDY-001',
        successState: 'Study is selected'
      },
      {
        targetId: 'entity-save',
        screen: 'entity-modal',
        title: 'Save the entity',
        body: 'Saving creates the DSMB workspace and returns the user to the list.',
        expectedAction: 'Click Save',
        successState: 'New DSMB row appears'
      },
      {
        targetId: 'entity-row',
        screen: 'dsmb-list',
        title: 'Open the new workspace',
        body: 'Use the DSMB name link to begin adding operational details.',
        expectedAction: 'Click Training DSMB Board 001',
        successState: 'DSMB Details opens'
      }
    ]
  },
  {
    id: 'add-study',
    title: 'Add a Study Association',
    group: 'Setup',
    role: 'DSMB Manager',
    route: '/dsmb/:dsmbId/dsmb-details',
    duration: '7 steps',
    summary: 'Attach an additional study to a DSMB or ISM/SO.',
    steps: [
      {
        targetId: 'nav-safety',
        screen: 'home',
        title: 'Open DSMB/ISM/SO',
        body: 'Begin from the CROMS home page and open the DSMB/ISM/SO workspace.',
        expectedAction: 'Click DSMB/ISM/SO',
        successState: 'DSMB List opens'
      },
      {
        targetId: 'entity-row',
        screen: 'dsmb-list',
        title: 'Select the DSMB',
        body: 'Use the DSMB List to open the oversight entity before adding a study association.',
        expectedAction: 'Click the hyperlinked DSMB name',
        successState: 'DSMB Details opens'
      },
      {
        targetId: 'studies-panel',
        screen: 'details',
        title: 'Use the search bar to locate the DSMB name',
        body: 'Open the Studies panel after locating the DSMB record.',
        expectedAction: 'Click Studies',
        successState: 'Studies panel expands'
      },
      {
        targetId: 'add-study',
        screen: 'details',
        title: 'Add a study',
        body: 'Start the study association workflow from the Studies panel.',
        expectedAction: 'Click Add Study',
        successState: 'Study modal opens'
      },
      {
        targetId: 'study-search',
        screen: 'study-modal',
        title: 'Find the study',
        body: 'Search by study number, title, grant number, or project title.',
        expectedAction: 'Click TRAIN-STUDY-002',
        successState: 'Study is selected'
      },
      {
        targetId: 'study-save',
        screen: 'study-modal',
        title: 'Save association',
        body: 'The selected study is added to the oversight entity.',
        expectedAction: 'Click Save Study',
        successState: 'Study count increases'
      },
      {
        targetId: 'studies-row-new',
        screen: 'details',
        title: 'Verify the study row',
        body: 'Confirm that the new study is visible before moving on.',
        expectedAction: 'Click the new study row',
        successState: 'Study association training complete'
      }
    ]
  },
  {
    id: 'add-member',
    title: 'Add a DSMB Member',
    group: 'Members',
    role: 'DSMB Manager',
    route: '/dsmb/:dsmbId/dsmb-details',
    duration: '8 steps',
    summary: 'Select a DSMB, assign a person, and save the DSMB member role.',
    steps: [
      {
        targetId: 'nav-safety',
        screen: 'home',
        title: 'Open DSMB/ISM/SO',
        body: 'Begin from the CROMS home page and open the DSMB/ISM/SO workspace.',
        expectedAction: 'Click DSMB/ISM/SO',
        successState: 'DSMB List opens'
      },
      {
        targetId: 'entity-row',
        screen: 'dsmb-list',
        title: 'Select the DSMB',
        body: 'Search for or select the DSMB record before adding a member.',
        expectedAction: 'Click the hyperlinked DSMB name',
        successState: 'DSMB Details page opens'
      },
      {
        targetId: 'members-panel',
        screen: 'details',
        title: 'Open Members',
        body: 'Member and stakeholder data is managed from Key Stakeholders/Members.',
        expectedAction: 'Click Key Stakeholders/Members',
        successState: 'Members panel expands'
      },
      {
        targetId: 'add-member',
        screen: 'details',
        title: 'Add a member',
        body: 'Use Add Member to assign a person and role.',
        expectedAction: 'Click Add Member',
        successState: 'Member modal opens'
      },
      {
        targetId: 'member-person',
        screen: 'member-modal',
        title: 'Select the person',
        body: 'Search and select the correct master contact record.',
        expectedAction: 'Click Dr. Reviewer A',
        successState: 'Person is selected'
      },
      {
        targetId: 'member-role',
        screen: 'member-modal',
        title: 'Choose the role',
        body: 'Role controls how the person appears in DSMB and meeting workflows.',
        expectedAction: 'Select DSMB Member',
        successState: 'Role is selected'
      },
      {
        targetId: 'member-save',
        screen: 'member-modal',
        title: 'Save the member',
        body: 'Saving places the person in the DSMB Members table.',
        expectedAction: 'Click Save',
        successState: 'Member appears in the table'
      },
      {
        targetId: 'member-row-new',
        screen: 'details',
        title: 'Verify member placement',
        body: 'Confirm the member appears in the expected table with the expected role.',
        expectedAction: 'Click Dr. Reviewer A row',
        successState: 'Member training complete'
      }
    ]
  },
  {
    id: 'add-adhoc-member',
    title: 'Add an Ad Hoc Member',
    group: 'Members',
    role: 'DSMB Manager',
    route: '/dsmb/:dsmbId/dsmb-details',
    duration: '8 steps',
    summary: 'Select a DSMB, add an ad hoc member, and associate them with a study.',
    steps: [
      {
        targetId: 'nav-safety',
        screen: 'home',
        title: 'Open DSMB/ISM/SO',
        body: 'Begin from the CROMS home page and open the DSMB/ISM/SO workspace.',
        expectedAction: 'Click DSMB/ISM/SO',
        successState: 'DSMB List opens'
      },
      {
        targetId: 'entity-row',
        screen: 'dsmb-list',
        title: 'Select the DSMB',
        body: 'Search for or select the DSMB record before adding an ad hoc member.',
        expectedAction: 'Click the hyperlinked DSMB name',
        successState: 'DSMB Details page opens'
      },
      {
        targetId: 'members-panel',
        screen: 'details',
        title: 'Open Members',
        body: 'Ad hoc members are managed separately from regular DSMB members.',
        expectedAction: 'Click Key Stakeholders/Members',
        successState: 'Members panel expands'
      },
      {
        targetId: 'add-member',
        screen: 'details',
        title: 'Add ad hoc member',
        body: 'Use the top Add Member action to add the person, then complete the ad hoc member details.',
        expectedAction: 'Click Add Member',
        successState: 'Ad hoc modal opens'
      },
      {
        targetId: 'adhoc-person',
        screen: 'adhoc-modal',
        title: 'Search for the member',
        body: 'Search for the person by name before assigning the role.',
        expectedAction: 'Click Dr. Ad Hoc Reviewer A',
        successState: 'Person is selected'
      },
      {
        targetId: 'adhoc-role',
        screen: 'adhoc-modal',
        title: 'Select ad hoc role',
        body: 'Use the role dropdown to identify the person as an ad hoc DSMB member.',
        expectedAction: 'Select Ad Hoc DSMB Member',
        successState: 'Ad hoc role is selected'
      },
      {
        targetId: 'adhoc-save',
        screen: 'adhoc-modal',
        title: 'Add ad hoc member',
        body: 'The member appears in the ad hoc section after save.',
        expectedAction: 'Click Add',
        successState: 'Ad hoc member appears'
      },
      {
        targetId: 'adhoc-row-new',
        screen: 'details',
        title: 'Verify ad hoc row',
        body: 'Confirm the ad hoc member and study association.',
        expectedAction: 'Click Dr. Ad Hoc Reviewer A row',
        successState: 'Ad hoc member training complete'
      }
    ]
  },
  {
    id: 'create-meeting',
    title: 'Create a Meeting',
    group: 'Meetings',
    role: 'DSMB Meeting Manager',
    route: '/dsmb/:dsmbId/dsmb-details',
    duration: '9 steps',
    summary: 'Select a DSMB, create the meeting shell, and confirm Draft status.',
    steps: [
      {
        targetId: 'nav-safety',
        screen: 'home',
        title: 'Open DSMB/ISM/SO',
        body: 'Begin from the CROMS home page and open the DSMB/ISM/SO workspace.',
        expectedAction: 'Click DSMB/ISM/SO',
        successState: 'DSMB List opens'
      },
      {
        targetId: 'entity-row',
        screen: 'dsmb-list',
        title: 'Select the DSMB',
        body: 'Search for or select the DSMB record before creating a meeting.',
        expectedAction: 'Click the hyperlinked DSMB name',
        successState: 'DSMB Details page opens'
      },
      {
        targetId: 'meetings-panel',
        screen: 'details',
        title: 'Open Meetings',
        body: 'Meetings begin from the DSMB or ISM/SO details workspace.',
        expectedAction: 'Click Meetings',
        successState: 'Meetings panel expands'
      },
      {
        targetId: 'add-meeting',
        screen: 'details',
        title: 'Add meeting',
        body: 'Create the meeting shell before adding agenda items, invitees, documents, and notifications.',
        expectedAction: 'Click Add Meeting',
        successState: 'Meeting modal opens'
      },
      {
        targetId: 'meeting-type',
        screen: 'meeting-modal',
        title: 'Choose meeting type',
        body: 'Meeting type helps frame the meeting purpose.',
        expectedAction: 'Select Safety Review',
        successState: 'Meeting type is selected'
      },
      {
        targetId: 'meeting-conduct',
        screen: 'meeting-modal',
        title: 'Choose conduct mode',
        body: 'Conduct mode controls fields and status behavior.',
        expectedAction: 'Click Virtual',
        successState: 'Virtual conduct is selected'
      },
      {
        targetId: 'meeting-save',
        screen: 'meeting-modal',
        title: 'Save draft meeting',
        body: 'New meetings start in Draft status. Saving returns you to the DSMB Details meeting list.',
        expectedAction: 'Click Save',
        successState: 'Meetings list opens'
      },
      {
        targetId: 'new-meeting-row',
        screen: 'details',
        title: 'Open the new meeting',
        body: 'Return to the Meetings section and select the newly created meeting to view its details.',
        expectedAction: 'Click 06/18/2026 10:00 AM - 12:00 PM ET',
        successState: 'Meeting Details opens'
      },
      {
        targetId: 'meeting-status',
        screen: 'meeting-details',
        title: 'Confirm Draft status',
        body: 'Draft status means the meeting can still be edited and prepared.',
        expectedAction: 'Click Draft status',
        successState: 'Meeting creation training complete'
      }
    ]
  },
  {
    id: 'build-agenda',
    title: 'Build a Meeting Agenda',
    group: 'Meetings',
    role: 'DSMB Meeting Manager',
    route: '/dsmb/:dsmbId/dsmb-details/:meetingId/meeting-details',
    duration: '8 steps',
    summary: 'Select a meeting and add an agenda item.',
    steps: [
      {
        targetId: 'nav-safety',
        screen: 'home',
        title: 'Open DSMB/ISM/SO',
        body: 'Begin from the CROMS home page and open the DSMB/ISM/SO workspace.',
        expectedAction: 'Click DSMB/ISM/SO',
        successState: 'DSMB List opens'
      },
      {
        targetId: 'entity-row',
        screen: 'dsmb-list',
        title: 'Select the DSMB',
        body: 'Open the DSMB record before selecting the meeting.',
        expectedAction: 'Click the hyperlinked DSMB name',
        successState: 'DSMB Details page opens'
      },
      {
        targetId: 'meeting-title',
        screen: 'details',
        title: 'Select meeting',
        body: 'Open the meeting so all meeting-specific panels are available.',
        expectedAction: 'Click the hyperlinked meeting date and time',
        successState: 'Meeting Details page opens'
      },
      {
        targetId: 'agenda-panel',
        screen: 'meeting-details',
        title: 'Open Agenda',
        body: 'Agenda content is required for most meeting publication paths.',
        expectedAction: 'Click Agenda panel',
        successState: 'Agenda panel expands'
      },
      {
        targetId: 'add-agenda',
        screen: 'meeting-details',
        title: 'Add agenda item',
        body: 'Agenda items capture session type, study, order, and timing.',
        expectedAction: 'Click Add Agenda Item',
        successState: 'Agenda modal opens'
      },
      {
        targetId: 'agenda-type',
        screen: 'agenda-modal',
        title: 'Choose session type',
        body: 'Open, Closed, and Study Specific sessions can drive different materials.',
        expectedAction: 'Select Open',
        successState: 'Session type is selected'
      },
      {
        targetId: 'agenda-study',
        screen: 'agenda-modal',
        title: 'Choose agenda type',
        body: 'Agenda type identifies the purpose of the agenda item.',
        expectedAction: 'Select Safety Review',
        successState: 'Agenda type is selected'
      },
      {
        targetId: 'agenda-save',
        screen: 'agenda-modal',
        title: 'Save agenda item',
        body: 'The agenda item appears in the meeting agenda table.',
        expectedAction: 'Click Save',
        successState: 'Meeting agenda training complete'
      }
    ]
  },
  {
    id: 'publish-meeting',
    title: 'Publish Meeting Notification',
    group: 'Meetings',
    role: 'DSMB Meeting Manager',
    route: '/dsmb/:dsmbId/dsmb-details/:meetingId/meeting-details',
    duration: '10 steps',
    summary: 'Return to DSMB Details, select a meeting from the meeting list, add dial-in details, preview, and publish.',
    steps: [
      {
        targetId: 'nav-safety',
        screen: 'home',
        title: 'Open DSMB/ISM/SO',
        body: 'Begin from the CROMS home page and open the DSMB/ISM/SO workspace.',
        expectedAction: 'Click DSMB/ISM/SO',
        successState: 'DSMB List opens'
      },
      {
        targetId: 'entity-row',
        screen: 'dsmb-list',
        title: 'Return to DSMB Details',
        body: 'Open the DSMB record first so the learner can see the complete list of meetings for this DSMB.',
        expectedAction: 'Click the hyperlinked DSMB name',
        successState: 'DSMB Details page opens'
      },
      {
        targetId: 'meeting-title',
        screen: 'details',
        title: 'Select the meeting from the list',
        body: 'Review all meetings in this DSMB, then open the meeting from the Meetings panel.',
        expectedAction: 'Click the hyperlinked meeting date and time',
        successState: 'Meeting Details page opens'
      },
      {
        targetId: 'draft-email',
        screen: 'meeting-details',
        title: 'Draft meeting email',
        body: 'Meeting publication starts by reviewing the notification.',
        expectedAction: 'Click Draft Email',
        successState: 'Email modal opens'
      },
      {
        targetId: 'email-recipients',
        screen: 'email-modal',
        title: 'Review recipients',
        body: 'Check To, Cc, and Bcc before sending.',
        expectedAction: 'Click Recipients',
        successState: 'Recipients are reviewed'
      },
      {
        targetId: 'email-body',
        screen: 'email-modal',
        title: 'Add teams dial in information to body of email',
        body: 'Add or confirm the Teams dial-in details in the meeting email body.',
        expectedAction: 'Add dial in meeting information to the body of the email',
        successState: 'Draft reviewed'
      },
      {
        targetId: 'save-draft',
        screen: 'email-modal',
        title: 'Save draft',
        body: 'Saving creates or updates the draft email.',
        expectedAction: 'Click Save Draft',
        successState: 'Draft is saved'
      },
      {
        targetId: 'preview-email',
        screen: 'email-modal',
        title: 'Preview notification',
        body: 'Preview gives one more checkpoint before publishing.',
        expectedAction: 'Click Preview',
        successState: 'Preview is opened'
      },
      {
        targetId: 'publish-email',
        screen: 'email-modal',
        title: 'Publish meeting',
        body: 'Publishing sends or queues notifications and moves the meeting to Published.',
        expectedAction: 'Click Publish',
        successState: 'Meeting status changes to Published'
      },
      {
        targetId: 'meeting-status',
        screen: 'meeting-details',
        title: 'Verify Published status',
        body: 'Published status unlocks later meeting actions like start, revise, or cancel.',
        expectedAction: 'Click Published status',
        successState: 'Publication training complete'
      }
    ]
  },
  {
    id: 'run-meeting',
    title: 'Start and End a Meeting',
    group: 'Meetings',
    role: 'DSMB Meeting Manager',
    route: '/dsmb/:dsmbId/dsmb-details/:meetingId/meeting-details',
    duration: '9 steps',
    summary: 'Move a meeting through execution and capture attendance.',
    steps: [
      {
        targetId: 'nav-safety',
        screen: 'home',
        title: 'Open DSMB/ISM/SO',
        body: 'Begin from the CROMS home page and open the DSMB/ISM/SO workspace.',
        expectedAction: 'Click DSMB/ISM/SO',
        successState: 'DSMB List opens'
      },
      {
        targetId: 'entity-row',
        screen: 'dsmb-list',
        title: 'Select the DSMB',
        body: 'Use the DSMB List to open the oversight entity and access its meeting.',
        expectedAction: 'Click the hyperlinked DSMB name',
        successState: 'DSMB Details opens'
      },
      {
        targetId: 'start-meeting',
        screen: 'meeting-details',
        title: 'Start the meeting',
        body: 'A Published meeting can be moved to In Progress.',
        expectedAction: 'Click Start Meeting',
        successState: 'Meeting status changes to In Progress'
      },
      {
        targetId: 'conduct-panel',
        screen: 'meeting-details',
        title: 'Open Conduct',
        body: 'Conduct fields and attendance are captured while the meeting is active.',
        expectedAction: 'Click Conduct',
        successState: 'Conduct panel opens'
      },
      {
        targetId: 'attendance-capture',
        screen: 'meeting-details',
        title: 'Capture attendance',
        body: 'Mark who attended the meeting or session.',
        expectedAction: 'Click Attendance',
        successState: 'Attendance editor opens'
      },
      {
        targetId: 'attendance-mode',
        screen: 'meeting-details',
        title: 'Select attendance mode',
        body: 'Use the dropdown to choose the attendance mode for a participant.',
        expectedAction: 'Select Remote',
        successState: 'Attendance mode is selected'
      },
      {
        targetId: 'attendance-save',
        screen: 'meeting-details',
        title: 'Save attendance',
        body: 'Saved attendance persists with the meeting record.',
        expectedAction: 'Click Save Attendance',
        successState: 'Attendance is saved'
      },
      {
        targetId: 'end-meeting',
        screen: 'meeting-details',
        title: 'End the meeting',
        body: 'Ending closes the active meeting state.',
        expectedAction: 'Click End Meeting',
        successState: 'Meeting status changes to Completed'
      },
      {
        targetId: 'meeting-status',
        screen: 'meeting-details',
        title: 'Verify completion',
        body: 'The meeting should no longer be In Progress.',
        expectedAction: 'Click Completed status',
        successState: 'Meeting execution training complete'
      }
    ]
  },
  {
    id: 'upload-document',
    title: 'Upload DSMB Document',
    group: 'Documents',
    role: 'Document Manager',
    route: '/dsmb/:dsmbId/dsmb-details',
    duration: '7 steps',
    summary: 'Select a DSMB, upload a DSMB-level document, and verify the row.',
    steps: [
      {
        targetId: 'entity-row',
        screen: 'dsmb-list',
        title: 'Select the DSMB',
        body: 'Search for or select the DSMB record before adding documents.',
        expectedAction: 'Click the hyperlinked DSMB name',
        successState: 'DSMB Details page opens'
      },
      {
        targetId: 'documents-panel',
        screen: 'details',
        title: 'Open Documents',
        body: 'Documents can be scoped to DSMB, meeting, agenda, COI, or packages.',
        expectedAction: 'Click Documents',
        successState: 'Documents panel opens'
      },
      {
        targetId: 'add-document',
        screen: 'documents',
        title: 'Add document',
        body: 'Start the upload from the document table.',
        expectedAction: 'Click Add Document',
        successState: 'Document modal opens'
      },
      {
        targetId: 'document-category',
        screen: 'document-modal',
        title: 'Choose category',
        body: 'Category helps downstream review and display rules.',
        expectedAction: 'Select Charter',
        successState: 'Category is selected'
      },
      {
        targetId: 'document-upload',
        screen: 'document-modal',
        title: 'Attach file',
        body: 'Upload or check in the file content.',
        expectedAction: 'Click upload zone',
        successState: 'File is attached'
      },
      {
        targetId: 'document-save',
        screen: 'document-modal',
        title: 'Save document',
        body: 'The document appears in the table after save.',
        expectedAction: 'Click Add',
        successState: 'Document row appears'
      },
      {
        targetId: 'document-row-new',
        screen: 'documents',
        title: 'Verify document row',
        body: 'Confirm the new document has a version and checked-in status.',
        expectedAction: 'Click Safety Review Charter.pdf',
        successState: 'Document upload training complete'
      }
    ]
  },
  {
    id: 'document-review',
    title: 'Initiate Document Review',
    group: 'Documents',
    role: 'Workflow Initiator',
    route: '/dsmb/:dsmbId/dsmb-details',
    duration: '6 steps',
    summary: 'Run workflow validation and start document review.',
    steps: [
      {
        targetId: 'documents-panel',
        screen: 'details',
        title: 'Open Documents',
        body: 'Document review is initiated from the document table.',
        expectedAction: 'Click Documents',
        successState: 'Documents panel opens'
      },
      {
        targetId: 'document-review-action',
        screen: 'documents',
        title: 'Initiate review',
        body: 'The app checks readiness before triggering the Logic App workflow.',
        expectedAction: 'Click Initiate Review',
        successState: 'Workflow precheck opens'
      },
      {
        targetId: 'workflow-summary',
        screen: 'workflow-dialog',
        title: 'Review workflow summary',
        body: 'Confirm document, workflow, user, and target review context.',
        expectedAction: 'Click the workflow summary',
        successState: 'Summary is reviewed'
      },
      {
        targetId: 'workflow-confirm',
        screen: 'workflow-dialog',
        title: 'Confirm workflow',
        body: 'Confirmation calls the shared workflow initiation path in the real system.',
        expectedAction: 'Click Confirm',
        successState: 'Workflow starts'
      },
      {
        targetId: 'document-review-status',
        screen: 'documents',
        title: 'Check review status',
        body: 'The review status should move to Initiated or Processing.',
        expectedAction: 'Click Processing status',
        successState: 'Review status is visible'
      },
      {
        targetId: 'document-next-reviewers',
        screen: 'documents',
        title: 'Identify next reviewers',
        body: 'The table helps users see who needs to act next.',
        expectedAction: 'Click Next Reviewers',
        successState: 'Document review training complete'
      }
    ]
  },
  {
    id: 'check-out-document',
    title: 'Check Out a Document',
    group: 'Documents',
    role: 'Document Manager',
    route: '/dsmb/:dsmbId/dsmb-details',
    duration: '4 steps',
    summary: 'Open the document menu and check out a checked-in document for edits.',
    steps: [
      {
        targetId: 'documents-panel',
        screen: 'details',
        title: 'Open Documents',
        body: 'Document check-out starts from the DSMB Documents panel.',
        expectedAction: 'Click Documents',
        successState: 'Documents panel opens'
      },
      {
        targetId: 'document-row-new',
        screen: 'documents',
        title: 'Open the document menu',
        body: 'Use the document button and caret menu to access document file actions.',
        expectedAction: 'Click Safety_Review_Charter.pdf',
        successState: 'Document menu is available'
      },
      {
        targetId: 'document-checkout',
        screen: 'documents',
        title: 'Check out the document',
        body: 'Check Out locks the document so updates can be made before check-in.',
        expectedAction: 'Click Check Out',
        successState: 'Document is checked out'
      },
      {
        targetId: 'document-row-new',
        screen: 'documents',
        title: 'Verify checked-out state',
        body: 'The table shows the document as checked out after the action.',
        expectedAction: 'Click Safety_Review_Charter.pdf',
        successState: 'Check-out training complete'
      }
    ]
  },
  {
    id: 'check-in-document',
    title: 'Check In a Document',
    group: 'Documents',
    role: 'Document Manager',
    route: '/dsmb/:dsmbId/dsmb-details',
    duration: '4 steps',
    summary: 'Return an edited document through the document menu check-in action.',
    steps: [
      {
        targetId: 'documents-panel',
        screen: 'details',
        title: 'Open Documents',
        body: 'The document begins this training in a checked-out state.',
        expectedAction: 'Click Documents',
        successState: 'Documents panel opens'
      },
      {
        targetId: 'document-row-new',
        screen: 'documents',
        title: 'Open the document menu',
        body: 'The checked-out document menu includes Check In and Discard Check Out.',
        expectedAction: 'Click Safety_Review_Charter.pdf',
        successState: 'Check-in menu is available'
      },
      {
        targetId: 'document-checkin',
        screen: 'documents',
        title: 'Check in the document',
        body: 'Check In returns the edited document to the shared document table.',
        expectedAction: 'Click Check In',
        successState: 'Document is checked in'
      },
      {
        targetId: 'document-row-new',
        screen: 'documents',
        title: 'Verify checked-in state',
        body: 'The table confirms the document has been checked in.',
        expectedAction: 'Click Safety_Review_Charter.pdf',
        successState: 'Check-in training complete'
      }
    ]
  },
  {
    id: 'approve-document',
    title: 'Approve Document Review',
    group: 'Documents',
    role: 'Document Approver',
    route: '/dsmb/:dsmbId/dsmb-details',
    duration: '6 steps',
    summary: 'Open a pending document review, select an approval outcome, and submit approval.',
    steps: [
      {
        targetId: 'documents-panel',
        screen: 'details',
        title: 'Open Documents',
        body: 'Document approvals are completed from the document review queue in the Documents panel.',
        expectedAction: 'Click Documents',
        successState: 'Documents panel opens'
      },
      {
        targetId: 'document-approval-action',
        screen: 'documents',
        title: 'Open the approval review',
        body: 'Open the pending document review to inspect the document and workflow context.',
        expectedAction: 'Click Review Document',
        successState: 'Document approval review opens'
      },
      {
        targetId: 'document-approval-summary',
        screen: 'document-approval',
        title: 'Review document context',
        body: 'Confirm the document, category, version, and approval status before deciding.',
        expectedAction: 'Click the document summary',
        successState: 'Document context is reviewed'
      },
      {
        targetId: 'document-approval-outcome',
        screen: 'document-approval',
        title: 'Select approval outcome',
        body: 'Choose the reviewer outcome for the document.',
        expectedAction: 'Select Approved',
        successState: 'Approval outcome is selected'
      },
      {
        targetId: 'document-approval-comments',
        screen: 'document-approval',
        title: 'Add approval comments',
        body: 'Approval comments document the reviewer decision.',
        expectedAction: 'Enter approval comments',
        successState: 'Comments are entered'
      },
      {
        targetId: 'document-approval-submit',
        screen: 'document-approval',
        title: 'Submit approval',
        body: 'Submitting completes the document approval process.',
        expectedAction: 'Click Submit Approval',
        successState: 'Document approval training complete'
      }
    ]
  },
  {
    id: 'workflow-recovery',
    title: 'Workflow Validation Recovery',
    group: 'Documents',
    role: 'Workflow Initiator',
    route: '/dsmb/:dsmbId/dsmb-details',
    duration: '7 steps',
    summary: 'Trigger a failed precheck, fix the prerequisite, and retry.',
    steps: [
      {
        targetId: 'document-review-action',
        screen: 'documents',
        title: 'Try review before prerequisites',
        body: 'This training intentionally starts with a document missing a prerequisite.',
        expectedAction: 'Click Initiate Review',
        successState: 'Validation message appears'
      },
      {
        targetId: 'validation-message',
        screen: 'validation-error',
        title: 'Read the validation failure',
        body: 'The failure tells the user why the workflow cannot proceed.',
        expectedAction: 'Click the message',
        successState: 'Blocker is understood'
      },
      {
        targetId: 'fix-prereq',
        screen: 'validation-error',
        title: 'Navigate to the missing item',
        body: 'The user needs to add a meeting agenda item before review can proceed.',
        expectedAction: 'Click Add Missing Agenda',
        successState: 'Meeting Details opens'
      },
      {
        targetId: 'add-agenda',
        screen: 'meeting-details',
        title: 'Add the missing agenda',
        body: 'Add the missing agenda item to clear the workflow prerequisite.',
        expectedAction: 'Click Add Agenda Item',
        successState: 'Agenda modal opens'
      },
      {
        targetId: 'agenda-save',
        screen: 'agenda-modal',
        title: 'Save the prerequisite',
        body: 'Saving the agenda item makes the workflow precheck pass.',
        expectedAction: 'Click Save Agenda Item',
        successState: 'Agenda is saved'
      },
      {
        targetId: 'workflow-confirm',
        screen: 'workflow-dialog',
        title: 'Retry and confirm',
        body: 'The workflow can now be initiated.',
        expectedAction: 'Click Confirm',
        successState: 'Workflow starts'
      },
      {
        targetId: 'document-review-status',
        screen: 'documents',
        title: 'Verify recovery',
        body: 'The status confirms the retry succeeded.',
        expectedAction: 'Click Processing status',
        successState: 'Recovery training complete'
      }
    ]
  },
  {
    id: 'report-coi',
    title: 'Report an Ad Hoc COI',
    group: 'COI',
    role: 'DSMB Manager',
    route: '/dsmb/:dsmbId/dsmb-details',
    duration: '9 steps',
    summary: 'Select a DSMB, add an ad hoc DSMB member, and initiate the member approval COI notification.',
    steps: [
      {
        targetId: 'entity-row',
        screen: 'dsmb-list',
        title: 'Select the DSMB',
        body: 'Open the DSMB record before creating an ad hoc COI.',
        expectedAction: 'Click the hyperlinked DSMB name',
        successState: 'DSMB Details page opens'
      },
      {
        targetId: 'members-panel',
        screen: 'details',
        title: 'Select Key Stakeholders',
        body: 'Open Key Stakeholders/Members to add or confirm the ad hoc member.',
        expectedAction: 'Click Key Stakeholders/Members',
        successState: 'Members panel expands'
      },
      {
        targetId: 'add-member',
        screen: 'details',
        title: 'Enter new member name and information',
        body: 'Begin adding the new person as an ad hoc DSMB member.',
        expectedAction: 'Click Add Member',
        successState: 'Ad Hoc DSMB member modal opens'
      },
      {
        targetId: 'adhoc-role',
        screen: 'adhoc-modal',
        title: 'Select ad hoc role',
        body: 'Use the Role dropdown to select the role for the new member.',
        expectedAction: 'Select Ad Hoc DSMB Member',
        successState: 'Ad Hoc DSMB Member role is selected'
      },
      {
        targetId: 'adhoc-save',
        screen: 'adhoc-modal',
        title: 'Add the ad hoc DSMB member',
        body: 'Add the ad hoc DSMB member before creating the COI.',
        expectedAction: 'Click Add',
        successState: 'Ad Hoc DSMB member appears under Ad Hoc DSMB Members panel'
      },
      {
        targetId: 'coi-panel',
        screen: 'details',
        title: 'Open COI',
        body: 'COI records are managed from the DSMB or ISM/SO details workspace.',
        expectedAction: 'Click Conflict of Interest',
        successState: 'COI panel opens'
      },
      {
        targetId: 'report-coi',
        screen: 'coi-panel',
        title: 'Open COI row actions',
        body: 'Use the row action menu for the newly added member to start the member approval COI workflow.',
        expectedAction: 'Click row actions',
        successState: 'COI action menu opens'
      },
      {
        targetId: 'coi-initiate-member-approval',
        screen: 'coi-panel',
        title: 'Initiate COI for member approval',
        body: 'Select the CROMS row action that initiates the COI form for member approval.',
        expectedAction: 'Click Initiate COI for Member Approval',
        successState: 'Confirmation opens'
      },
      {
        targetId: 'coi-confirm-yes',
        screen: 'coi-confirmation',
        title: 'Confirm COI notification',
        body: 'Confirm that the selected user should be notified to complete the COI Form.',
        expectedAction: 'Click Yes',
        successState: 'COI notification is sent'
      }
    ]
  },
  {
    id: 'submit-coi',
    title: 'Complete and Submit COI Form',
    group: 'COI',
    role: 'DSMB Member',
    route: '/dsmb/:dsmbId/dsmb-details',
    duration: '10 steps',
    summary: 'Open the DSMB, navigate to Conflict of Interest, answer dynamic questions, save, submit, and e-sign.',
    steps: [
      {
        targetId: 'entity-row',
        screen: 'dsmb-list',
        title: 'Select the DSMB',
        body: 'Start from the DSMB List and open the hyperlinked DSMB record.',
        expectedAction: 'Click the hyperlinked DSMB name',
        successState: 'DSMB Details page opens'
      },
      {
        targetId: 'coi-panel',
        screen: 'details',
        title: 'Open Conflict of Interest',
        body: 'Use the Conflict of Interest panel on the DSMB Details page to find the COI record.',
        expectedAction: 'Click Conflict of Interest',
        successState: 'Conflict of Interest panel opens'
      },
      {
        targetId: 'coi-row',
        screen: 'coi-panel',
        title: 'Open the COI form',
        body: 'Open the COI record for the DSMB member.',
        expectedAction: 'Click Dr. Reviewer A',
        successState: 'COI Form opens'
      },
      {
        targetId: 'coi-form-header',
        screen: 'coi-form',
        title: 'Review COI context',
        body: 'Confirm the form belongs to the correct member and study context.',
        expectedAction: 'Click the COI header',
        successState: 'Context is reviewed'
      },
      {
        targetId: 'coi-question-1',
        screen: 'coi-form',
        title: 'Answer required question',
        body: 'Required questions must be answered before submission.',
        expectedAction: 'Click Yes',
        successState: 'Required response is captured'
      },
      {
        targetId: 'coi-question-detail',
        screen: 'coi-form',
        title: 'Add explanatory detail',
        body: 'Some responses reveal follow-up fields.',
        expectedAction: 'Click explanation field',
        successState: 'Explanation is entered'
      },
      {
        targetId: 'coi-save',
        screen: 'coi-form',
        title: 'Save draft',
        body: 'Saving preserves progress before final submission.',
        expectedAction: 'Click Save',
        successState: 'Draft is saved'
      },
      {
        targetId: 'coi-submit',
        screen: 'coi-form',
        title: 'Submit COI',
        body: 'Submit runs validation and moves the user to e-signature.',
        expectedAction: 'Click Submit',
        successState: 'E-Signature opens'
      },
      {
        targetId: 'esign-confirm',
        screen: 'esignature',
        title: 'Complete e-signature',
        body: 'The COI is not submitted until the e-signature succeeds.',
        expectedAction: 'Click Confirm Signature',
        successState: 'COI is submitted, this is a two step authentication process'
      },
      {
        targetId: 'coi-status',
        screen: 'coi-form',
        title: 'Verify submitted status',
        body: 'The submitted status confirms the form moved into review.',
        expectedAction: 'Click Submitted status',
        successState: 'COI submission training complete'
      }
    ]
  },
  {
    id: 'review-coi',
    title: 'Review a COI Submission',
    group: 'COI',
    role: 'COI Reviewer',
    route: '/dsmb/coi-dashboard',
    duration: '7 steps',
    summary: 'Open a COI task, review responses, select outcome, and submit review.',
    steps: [
      {
        targetId: 'coi-dashboard-link',
        screen: 'dsmb-list',
        title: 'Open COI Dashboard',
        body: 'COI reviewers work from the COI Dashboard queue.',
        expectedAction: 'Click COI Dashboard',
        successState: 'COI Dashboard opens'
      },
      {
        targetId: 'coi-filter-my-task',
        screen: 'coi-dashboard',
        title: 'Filter to assigned work',
        body: 'Use My Tasks to focus on assigned COI reviews.',
        expectedAction: 'Click My Tasks',
        successState: 'Task list is filtered'
      },
      {
        targetId: 'coi-dashboard-row',
        screen: 'coi-dashboard',
        title: 'Open COI record',
        body: 'Open the COI form from the member-name link in the COI Forms table.',
        expectedAction: 'Click Kellogg, Dean L',
        successState: 'COI review form opens'
      },
      {
        targetId: 'coi-review-responses',
        screen: 'coi-review',
        title: 'Review responses',
        body: 'Review disclosed conflicts and supporting details.',
        expectedAction: 'Click Response Summary',
        successState: 'Responses are reviewed'
      },
      {
        targetId: 'coi-review-outcome',
        screen: 'coi-review',
        title: 'Select outcome',
        body: 'Choose the review outcome based on the disclosed information.',
        expectedAction: 'Click Approved',
        successState: 'Outcome is selected'
      },
      {
        targetId: 'coi-review-comments',
        screen: 'coi-review',
        title: 'Add comments',
        body: 'Reviewer comments support the decision.',
        expectedAction: 'Click Comments',
        successState: 'Comments are entered'
      },
      {
        targetId: 'coi-review-submit',
        screen: 'coi-review',
        title: 'Submit review',
        body: 'Submitting advances the COI workflow.',
        expectedAction: 'Click Submit Review',
        successState: 'COI review training complete'
      }
    ]
  },
  {
    id: 'member-approval',
    title: 'Review Member Approval Package',
    group: 'Member Approval',
    role: 'Member Approval Reviewer',
    route: '/dsmb/member-approval-dashboard',
    duration: '4 steps',
    summary: 'Review a package, select eligibility outcome, and submit.',
    steps: [
      {
        targetId: 'member-package-row',
        screen: 'member-dashboard',
        title: 'Open package version',
        body: 'Package version opens the member approval package.',
        expectedAction: 'Click Package Version 3',
        successState: 'Package opens'
      },
      {
        targetId: 'member-outcome',
        screen: 'member-package',
        title: 'Select eligibility outcome',
        body: 'Choose the eligibility outcome from the pending review member row.',
        expectedAction: 'Select consultant-only eligibility',
        successState: 'Outcome is selected'
      },
      {
        targetId: 'member-comments',
        screen: 'member-package',
        title: 'Add comments',
        body: 'Some outcomes require supporting comments.',
        expectedAction: 'Click Reviewer Comments',
        successState: 'Comments are entered'
      },
      {
        targetId: 'member-submit',
        screen: 'member-package',
        title: 'Complete COI review',
        body: 'Completing the COI review records the reviewer decision and advances the package.',
        expectedAction: 'Click COI Review Complete',
        successState: 'Member approval training complete'
      }
    ]
  },
  {
    id: 'ismso-written-review',
    title: 'ISM/SO Written Email Review',
    group: 'ISM/SO',
    role: 'ISM/SO Manager',
    route: '/dsmb/ismso-list',
    duration: '9 steps',
    summary: 'Switch to ISM/SO mode and publish a written email review meeting.',
    steps: [
      {
        targetId: 'nav-safety',
        screen: 'home',
        title: 'Open DSMB/ISM/SO',
        body: 'Begin from the CROMS home page and open the DSMB/ISM/SO workspace.',
        expectedAction: 'Click DSMB/ISM/SO',
        successState: 'DSMB List opens'
      },
      {
        targetId: 'view-ismso',
        screen: 'dsmb-list',
        title: 'Switch to ISM/SO list',
        body: 'The same list component supports ISM/SO mode.',
        expectedAction: 'Click View ISM/SO(s)',
        successState: 'ISM/SO list opens'
      },
      {
        targetId: 'ismso-row',
        screen: 'ismso-list',
        title: 'Open ISM/SO workspace',
        body: 'ISM/SO details use shared panels with different labels and workflows.',
        expectedAction: 'Click Training ISM/SO Office 001',
        successState: 'ISM/SO Details opens'
      },
      {
        targetId: 'add-meeting',
        screen: 'ismso-details',
        title: 'Add written review meeting',
        body: 'Create the written email review from the Meetings panel.',
        expectedAction: 'Click Add Meeting',
        successState: 'Meeting modal opens'
      },
      {
        targetId: 'written-conduct',
        screen: 'meeting-modal',
        title: 'Confirm written review conduct',
        body: 'Written Email Review controls meeting and notification behavior.',
        expectedAction: 'Click Written Email Review',
        successState: 'Written review conduct is selected'
      },
      {
        targetId: 'meeting-save',
        screen: 'meeting-modal',
        title: 'Save written review',
        body: 'The written review starts as a Draft meeting.',
        expectedAction: 'Click Save',
        successState: 'Meeting Details opens'
      },
      {
        targetId: 'draft-email',
        screen: 'meeting-details',
        title: 'Draft written review email',
        body: 'The notification carries written review instructions and materials.',
        expectedAction: 'Click Draft Email',
        successState: 'Email modal opens'
      },
      {
        targetId: 'publish-email',
        screen: 'email-modal',
        title: 'Publish written review',
        body: 'Publishing queues the written review notification.',
        expectedAction: 'Click Publish',
        successState: 'Review is Published'
      },
      {
        targetId: 'meeting-status',
        screen: 'meeting-details',
        title: 'Verify Published status',
        body: 'The ISM/SO written review is now active for participants.',
        expectedAction: 'Click Published status',
        successState: 'ISM/SO training complete'
      }
    ]
  }
];
