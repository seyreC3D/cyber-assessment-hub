# Guide: Editing Questions in Cyber Essentials Checker

## 📝 Question Structure Overview

Each question in the HTML file follows this structure:

```html
<div class="question" data-control="X" data-critical="true/false">
    <div class="question-text">Your question here?</div>
    <div class="question-help">Helper text explaining the question</div>
    <div class="options">
        <label class="option">
            <input type="radio" name="qX_Y" value="pass">
            <span>Option 1 text</span>
        </label>
        <label class="option">
            <input type="radio" name="qX_Y" value="fail">
            <span>Option 2 text</span>
        </label>
        <!-- More options... -->
    </div>
</div>
```

### Key Components:

1. **data-control**: Which control section (1-6)
   - 1 = Firewalls
   - 2 = Secure Configuration
   - 3 = Security Updates
   - 4 = User Access Control
   - 5 = Malware Protection
   - 6 = Scope & Context

2. **data-critical**: Is this a mandatory requirement?
   - `true` = Critical (failure prevents certification)
   - `false` = Recommended (won't prevent certification)

3. **name**: Unique identifier (format: `qX_Y`)
   - X = control number
   - Y = question number within that control

4. **value**: Response type
   - `pass` = Meets requirement
   - `fail` = Doesn't meet requirement
   - `partial` = Partially meets
   - `unsure` = User doesn't know
   - `na` = Not applicable

---

## 🔧 How to Edit an Existing Question

### Example: Change a question text

**BEFORE:**
```html
<div class="question-text">Are all your work devices protected by a firewall?</div>
```

**AFTER:**
```html
<div class="question-text">Are all your work devices (including laptops, desktops, and mobile devices) protected by a firewall?</div>
```

### Example: Add more context to helper text

**BEFORE:**
```html
<div class="question-help">This includes built-in software firewalls or network firewalls.</div>
```

**AFTER:**
```html
<div class="question-help">This includes built-in software firewalls (Windows Defender Firewall, macOS Firewall) or network firewalls. Check: Control Panel > System and Security > Windows Defender Firewall</div>
```

### Example: Add more answer options

**BEFORE:**
```html
<div class="options">
    <label class="option">
        <input type="radio" name="q1_1" value="pass">
        <span>Yes, all devices are protected</span>
    </label>
    <label class="option">
        <input type="radio" name="q1_1" value="fail">
        <span>No, some devices don't have protection</span>
    </label>
</div>
```

**AFTER:**
```html
<div class="options">
    <label class="option">
        <input type="radio" name="q1_1" value="pass">
        <span>Yes, all devices are protected by firewalls</span>
    </label>
    <label class="option">
        <input type="radio" name="q1_1" value="partial">
        <span>Most devices are protected, but I'm not 100% sure about all</span>
    </label>
    <label class="option">
        <input type="radio" name="q1_1" value="fail">
        <span>No, we know some devices don't have firewall protection</span>
    </label>
    <label class="option">
        <input type="radio" name="q1_1" value="unsure">
        <span>I don't know what protection we have</span>
    </label>
</div>
```

---

## ➕ How to Add a New Question

### Step 1: Find the Right Section

Locate the control section where you want to add the question. Search for:
- `<!-- Control 1: Firewalls -->` for firewall questions
- `<!-- Control 2: Secure Configuration -->` for config questions
- etc.

### Step 2: Copy an Existing Question Template

Copy this template:

```html
<div class="question" data-control="X" data-critical="true">
    <div class="question-text">Your new question here?</div>
    <div class="question-help">Helpful context for the user</div>
    <div class="options">
        <label class="option">
            <input type="radio" name="qX_NEW" value="pass">
            <span>Yes, we do this correctly</span>
        </label>
        <label class="option">
            <input type="radio" name="qX_NEW" value="fail">
            <span>No, we don't do this</span>
        </label>
        <label class="option">
            <input type="radio" name="qX_NEW" value="unsure">
            <span>I'm not sure</span>
        </label>
    </div>
</div>
```

### Step 3: Customize

1. Change `data-control="X"` to the right number (1-6)
2. Set `data-critical="true"` if it's mandatory, `"false"` if optional
3. Create unique `name="qX_NEW"` (e.g., `q1_6` for 6th firewall question)
4. Write your question and options

### Step 4: Update Analysis Logic (Optional)

If you want custom feedback, add to the `actionMap` in JavaScript:

```javascript
const actionMap = {
    // ... existing entries ...
    'q1_6': {  // Your new question ID
        fail: 'Specific action to fix this issue',
        impact: 'Why this matters for security'
    }
};
```

---

## 📊 How to Add Text Input Questions

For collecting specific information (like software lists, device counts):

```html
<div class="question" data-control="X" data-critical="false">
    <div class="question-text">What antivirus software do you use?</div>
    <div class="question-help">Enter the name and version if known</div>
    <input type="text" class="text-input" id="qX_software" placeholder="e.g., Windows Defender, Norton 360">
</div>
```

Then update the `collectResponses()` function to capture it:

```javascript
// In collectResponses() function, find textInputs section and add:
responses.textInputs.antivirusSoftware = document.getElementById('qX_software')?.value || '';
```

---

## 🎯 Common Question Modifications

### 1. Make a Question More Specific

**Generic:**
```html
<div class="question-text">Do you use MFA?</div>
```

**Specific:**
```html
<div class="question-text">Do you use Multi-Factor Authentication (MFA) on Microsoft 365, Google Workspace, and any other cloud services?</div>
<div class="question-help">MFA requires a second factor like a phone app (Microsoft Authenticator, Google Authenticator) or SMS code in addition to your password.</div>
```

### 2. Add Industry-Specific Context

**Before:**
```html
<div class="question-help">This includes all work computers.</div>
```

**After (for healthcare):**
```html
<div class="question-help">This includes all work computers, medical workstations, tablets used for patient records, and any devices accessing NHS systems.</div>
```

### 3. Add Verification Guidance

**Before:**
```html
<div class="question-text">Is automatic update enabled?</div>
```

**After:**
```html
<div class="question-text">Is automatic update enabled on all devices?</div>
<div class="question-help">
    To check on Windows: Settings > Update & Security > Windows Update > Advanced options<br>
    To check on Mac: System Preferences > Software Update > Automatically keep my Mac up to date
</div>
```

---

## 🔍 Finding Questions in the HTML File

### Search Tips:

1. **Find all questions in a control:**
   - Search for: `data-control="1"` (for firewalls)
   - Search for: `data-control="4"` (for access control)

2. **Find critical questions only:**
   - Search for: `data-critical="true"`

3. **Find a specific question:**
   - Search for: `name="q4_3"` (finds question by ID)

4. **Find text input questions:**
   - Search for: `class="text-input"`

---

## ⚠️ Important Rules

### DO:
✅ Keep `name="qX_Y"` attributes unique
✅ Use descriptive question text
✅ Provide helpful context in question-help
✅ Set `data-critical="true"` only for mandatory requirements
✅ Test after making changes

### DON'T:
❌ Change question IDs without updating JavaScript
❌ Remove the `data-control` attribute
❌ Duplicate `name` attributes
❌ Remove all options from a question
❌ Forget to close HTML tags properly

---

## 🧪 Testing Your Changes

After editing questions:

1. **Open in browser**: Double-click the HTML file
2. **Fill out the assessment**: Answer all questions including your new ones
3. **Click Analyze**: Make sure results appear
4. **Check console**: Press F12, look for JavaScript errors
5. **Verify scoring**: Ensure critical failures are flagged

---

## 📋 Question Templates Library

### Yes/No Question
```html
<div class="question" data-control="X" data-critical="true">
    <div class="question-text">Question text?</div>
    <div class="question-help">Helper text</div>
    <div class="options">
        <label class="option">
            <input type="radio" name="qX_Y" value="pass">
            <span>Yes</span>
        </label>
        <label class="option">
            <input type="radio" name="qX_Y" value="fail">
            <span>No</span>
        </label>
    </div>
</div>
```

### Multiple Choice Question
```html
<div class="question" data-control="X" data-critical="false">
    <div class="question-text">How do you handle backups?</div>
    <div class="question-help">Select the option that best describes your approach</div>
    <div class="options">
        <label class="option">
            <input type="radio" name="qX_Y" value="pass">
            <span>Automated daily backups to cloud storage</span>
        </label>
        <label class="option">
            <input type="radio" name="qX_Y" value="partial">
            <span>Weekly manual backups to external drive</span>
        </label>
        <label class="option">
            <input type="radio" name="qX_Y" value="fail">
            <span>Occasional backups when we remember</span>
        </label>
        <label class="option">
            <input type="radio" name="qX_Y" value="fail">
            <span>No regular backups</span>
        </label>
    </div>
</div>
```

### Number Input Question
```html
<div class="question" data-control="6" data-critical="false">
    <div class="question-text">How many cloud services does your organization use?</div>
    <div class="question-help">Count all cloud applications (email, storage, CRM, etc.)</div>
    <input type="number" class="text-input" id="q6_cloud_count" placeholder="Enter number" min="0">
</div>
```

### Dropdown Question
```html
<div class="question" data-control="X" data-critical="false">
    <div class="question-text">What is your primary operating system?</div>
    <div class="question-help">Select the OS used on most devices</div>
    <select class="text-input" id="qX_os">
        <option value="">-- Select --</option>
        <option value="windows">Windows 10/11</option>
        <option value="mac">macOS</option>
        <option value="linux">Linux</option>
        <option value="mixed">Mixed environment</option>
    </select>
</div>
```

---

## 💡 Example: Adding a New Question

Let's add a question about VPN usage to the Firewalls section:

```html
<!-- Add this after question q1_5 in Control 1: Firewalls -->

<div class="question" data-control="1" data-critical="false">
    <div class="question-text">Do remote workers use a corporate VPN when accessing company resources?</div>
    <div class="question-help">A VPN (Virtual Private Network) creates a secure tunnel back to your company network. This is recommended for remote access to internal systems.</div>
    <div class="options">
        <label class="option">
            <input type="radio" name="q1_6" value="pass">
            <span>Yes, all remote workers use our corporate VPN</span>
        </label>
        <label class="option">
            <input type="radio" name="q1_6" value="partial">
            <span>We have a VPN but not all workers use it consistently</span>
        </label>
        <label class="option">
            <input type="radio" name="q1_6" value="fail">
            <span>No, we don't have a corporate VPN</span>
        </label>
        <label class="option">
            <input type="radio" name="q1_6" value="na">
            <span>Not applicable - we don't have remote workers</span>
        </label>
    </div>
</div>
```

---

## 📞 Need Help?

Common issues:
- **Question not appearing**: Check HTML syntax, ensure all tags are closed
- **Analysis not working**: Check browser console (F12) for JavaScript errors
- **Scoring wrong**: Verify `data-critical` and `value` attributes
- **Formatting broken**: Check CSS classes match existing questions

Next: Tell me which questions you want to modify and I'll help you do it!
