# New Questions Added to Cyber Essentials Checker

## ✅ Summary of Changes

I've successfully added **7 new questions** to collect more detailed information about your organization's security posture:

---

## 🔥 Control 1: Firewalls

### NEW: Firewall Model and Version Details
**Location:** After question q1_5  
**Type:** Text area (multi-line)  
**Critical:** No (informational)

**Question:** "What firewall solution(s) do you use?"

**Helper Text:** "Please specify the make, model, and version of your primary firewall(s). Include both hardware firewalls (e.g., Cisco ASA, Fortinet FortiGate, pfSense) and software firewalls (e.g., Windows Defender Firewall, Sophos). If using multiple, list all."

**Example Answer:**
```
Fortinet FortiGate 60F (v7.0.5)
Windows Defender Firewall on all endpoints
pfSense v2.6.0 on backup gateway
```

**Why This Matters:**
- Helps identify end-of-life hardware
- Allows verification of firmware versions
- Enables targeted security recommendations
- Documents your infrastructure for audits

---

## 🛡️ Control 5: Malware Protection

### NEW: Anti-Malware Software and Version Details
**Location:** After question q5_4  
**Type:** Text area (multi-line)  
**Critical:** No (informational)

**Question:** "What anti-malware/antivirus software and version are you using?"

**Helper Text:** "Please specify the product name and version number for all anti-malware solutions in use. Examples: Windows Defender (built-in with Windows 11), Norton 360 v22.23.1, Sophos Intercept X v10.3, CrowdStrike Falcon v6.47. If using different solutions on different devices, please list all."

**Example Answer:**
```
Windows Defender (Windows 11 built-in)
Bitdefender Endpoint Security v7.2 on servers
CrowdStrike Falcon v6.47 on executive laptops
```

**Why This Matters:**
- Verifies you're using supported software
- Identifies version mismatches across fleet
- Helps assess if updates are being applied
- Documents protection levels

---

## 📋 Control 6: Scope & Context

### NEW: Backup Procedures Assessment
**Location:** After cloud services question  
**Type:** Multiple choice + Text area

#### Question 1: Backup Procedure Status
**Question:** "Do you have a documented backup and recovery procedure?"

**Options:**
- ✅ Yes, we have automated daily backups with documented recovery procedures
- ⚠️ We have backups but they're not fully automated or documented
- ❌ We have occasional backups but no formal procedure
- ❌ No regular backup procedure in place

**Helper Text:** "While not required for Cyber Essentials, backups are critical for business continuity and ransomware recovery."

#### Question 2: Backup Details
**Question:** "Please describe your backup solution and frequency:"

**Helper Text:** "Include: What is backed up, where backups are stored, how often, retention period, and how you test recovery."

**Example Answer:**
```
Daily automated backups of all file servers and databases to Azure Backup
30-day retention period
Weekly backups to offsite tape storage (90-day retention)
Monthly recovery tests performed on test environment
Full system backups include: file servers, SQL databases, email, configurations
```

**Why This Matters:**
- Backup failures are a leading cause of business closure
- Ransomware recovery depends entirely on backups
- Regulatory compliance often requires backups
- Shows business continuity readiness

---

### NEW: Incident Response Planning
**Location:** After backup questions  
**Type:** Multiple choice + Text area

#### Question 3: Incident Response Plan Status
**Question:** "Do you have a documented incident response plan?"

**Options:**
- ✅ Yes, we have a documented and tested incident response plan
- ⚠️ We have a basic plan but it hasn't been tested
- ❌ We have informal procedures but nothing documented
- ❌ No incident response plan

**Helper Text:** "An incident response plan defines what to do when a security incident occurs (e.g., malware infection, data breach, ransomware attack)."

#### Question 4: Incident Response Details
**Question:** "Please describe your incident response procedures:"

**Helper Text:** "Include: Who to contact first, escalation procedures, how incidents are logged, communication plan, and recovery steps."

**Example Answer:**
```
Incident Response Procedure:
1. Isolate affected systems from network immediately
2. Contact IT Manager (John Smith - 555-0123)
3. Log incident in ServiceNow with severity classification
4. Notify CISO within 2 hours for severity 1-2 incidents
5. Engage external security consultant (retained: SecureIT Ltd) if needed
6. Preserve evidence for forensic analysis
7. Begin containment and eradication procedures
8. Document all actions taken
9. Perform post-incident review within 48 hours
10. Update procedures based on lessons learned
```

**Why This Matters:**
- Reduces damage from security incidents
- Ensures consistent response across team
- Required for many compliance frameworks
- Demonstrates security maturity
- Critical for cyber insurance claims

---

## 🎯 How The Tool Uses This Information

### In Analysis Results:
1. **Warnings Section:** Missing backups or incident response plans are flagged
2. **Strengths Section:** Good backup/IR practices are highlighted
3. **Recommendations:** Specific guidance based on your responses
4. **Documentation:** All details captured for your records

### Example Feedback:

**If No Backups:**
```
⚠️ Warning: No regular backup procedure in place

Recommendation: While not required for Cyber Essentials, implementing 
automated backups is CRITICAL for ransomware recovery and business continuity. 
Consider cloud backup solutions like Azure Backup, AWS Backup, or Veeam.
```

**If Good Backups:**
```
✅ Strength: Automated backup procedures in place with documented recovery
```

**If No Incident Response:**
```
⚠️ Warning: No documented incident response plan

Recommendation: Create a simple incident response plan covering: 
1) Who to contact
2) How to isolate affected systems
3) When to notify authorities
4) Communication procedures
The NCSC provides free templates.
```

---

## 📊 Data Collection Summary

| Question | Field ID | Type | Critical | Purpose |
|----------|----------|------|----------|---------|
| Firewall Details | q1_firewall_details | Textarea | No | Hardware/software inventory |
| Malware Software | q5_malware_details | Textarea | No | Protection software audit |
| Backup Status | q6_backup | Multiple Choice | No | BC/DR readiness |
| Backup Details | q6_backup_details | Textarea | No | Recovery capabilities |
| IR Plan Status | q6_incident | Multiple Choice | No | Incident preparedness |
| IR Procedures | q6_incident_details | Textarea | No | Response documentation |

---

## 🔒 Privacy & Storage

**Important:** All new fields follow the same privacy model:
- ✅ Data stays in user's browser only
- ✅ Lost when page is closed (unless localStorage is added)
- ✅ Sent to Claude API only if AI analysis is used
- ✅ Never stored on any server

---

## 🧪 Testing Your Changes

To verify the new questions work correctly:

1. **Open the HTML file** in your browser
2. **Navigate to each new question:**
   - Control 1 → Find firewall details textbox
   - Control 5 → Find malware software textbox
   - Control 6 → Find backup questions and incident response questions
3. **Fill out all new fields** with sample data
4. **Click "Analyze"**
5. **Check results** for:
   - Backup warnings if you selected "No backup procedure"
   - Incident response warnings if selected "No plan"
   - Strengths if you selected good options

---

## 📝 Accessing the Collected Data

### For Manual Review:
Users can see their responses in the assessment as they fill it out.

### For Programmatic Access:
The data is collected in the `responses.textInputs` object:

```javascript
responses.textInputs.firewallDetails
responses.textInputs.malwareDetails
responses.textInputs.backupDetails
responses.textInputs.incidentDetails
```

### For Export/Reporting:
These fields will be included if you:
- Add the save/load feature
- Implement results export
- Create a backend to store responses
- Email results to IT team

---

## 💡 Customization Tips

### Want to make these questions mandatory?
Change `data-critical="false"` to `data-critical="true"` in the HTML

### Want different answer options?
Edit the `<label class="option">` sections

### Want more detailed follow-up questions?
Add additional questions following the same pattern

### Want dropdown instead of textarea?
Replace the textarea with a select element

---

## ✅ What's Next?

Your updated assessment tool now collects:
- ✅ Firewall infrastructure details
- ✅ Antivirus/anti-malware inventory
- ✅ Backup procedures and maturity
- ✅ Incident response capabilities

This gives you a **much more complete picture** of an organization's security posture beyond just Cyber Essentials compliance!

---

## 🆘 Questions?

Common customizations:
- "Can I make backup questions mandatory?" → Yes, change `data-critical="true"`
- "Can I add more questions?" → Yes, see EDITING_QUESTIONS_GUIDE.md
- "Can I save the text input data?" → Yes, use add_save_feature.js
- "Can I export this to a report?" → Requires custom code or backend

The tool is now ready to collect comprehensive security information! 🎉
