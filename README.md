# 🛡️ Cyber Essentials Readiness Checker

An AI-powered, interactive assessment tool to evaluate your organization's readiness for UK Cyber Essentials certification (v3.3).

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/demo-live-brightgreen)](https://yourusername.github.io/cyber-essentials-checker/)

## 🚀 Quick Start

**Try it now:** [Live Demo](https://yourusername.github.io/cyber-essentials-checker/)

**Or run locally:**
```bash
# Clone the repository
git clone https://github.com/yourusername/cyber-essentials-checker.git

# Open in browser
cd cyber-essentials-checker
open index.html  # macOS
# or
start index.html  # Windows
# or
xdg-open index.html  # Linux
```

No installation, no dependencies, no backend required!

## 📋 Features

### ✅ Comprehensive Assessment
- **30+ questions** covering all 5 Cyber Essentials technical controls
- Firewalls, Secure Configuration, Security Updates, User Access Control, Malware Protection
- Additional questions on backups and incident response
- Collects detailed infrastructure information (firewall models, antivirus versions)

### 🤖 AI-Powered Analysis
- **Claude API integration** for intelligent evaluation
- **Fallback local analysis** works without internet
- Identifies critical failures that prevent certification
- Provides actionable recommendations

### 📊 Detailed Results
- Overall readiness score (0-100%)
- Individual scores for each control
- Pass/Fail/Needs Work determination
- Timeline estimate for certification readiness
- Prioritized list of critical issues
- Specific remediation steps

### 🔒 Privacy-First
- **100% client-side** - data never leaves your browser
- No database, no server storage
- Optional AI analysis (can be disabled)
- GDPR compliant by design

### 📱 Modern UI
- Responsive design (works on mobile, tablet, desktop)
- Interactive collapsible sections
- Visual progress tracking
- Print-friendly results

## 🎯 Who Is This For?

- **Small businesses** preparing for Cyber Essentials certification
- **IT consultants** assessing client security posture
- **Certification bodies** providing pre-assessment tools
- **Internal IT teams** conducting security audits
- **MSPs** evaluating new client environments

## 📖 Documentation

- **[Quick Start Guide](docs/QUICK_START.md)** - Get up and running in 5 minutes
- **[Deployment Guide](docs/DEPLOYMENT_GUIDE.md)** - Detailed deployment options
- **[Editing Questions](docs/EDITING_QUESTIONS_GUIDE.md)** - Customize the assessment
- **[New Questions Summary](docs/NEW_QUESTIONS_SUMMARY.md)** - Recent additions
- **[Optional Features](docs/add_save_feature.js)** - Add save/load functionality

## 🏗️ Architecture

```
┌─────────────────┐
│   User Browser  │
│   (HTML/CSS/JS) │
└────────┬────────┘
         │
         ├─── Local Analysis (Always Available)
         │
         └─── Claude API (Optional AI Analysis)
                    ↓
              Enhanced Insights
```

**Tech Stack:**
- Pure HTML/CSS/JavaScript (no frameworks)
- Claude API for AI analysis (optional)
- LocalStorage for save feature (optional)

## 📦 What's Included

```
cyber-essentials-checker/
├── index.html                    # Main assessment tool
├── README.md                     # This file
├── LICENSE                       # MIT License
└── docs/
    ├── QUICK_START.md           # Fast deployment guide
    ├── DEPLOYMENT_GUIDE.md      # Comprehensive deployment
    ├── EDITING_QUESTIONS_GUIDE.md  # Customization guide
    ├── NEW_QUESTIONS_SUMMARY.md    # Recent changes
    └── add_save_feature.js         # Optional save/load code
```

## 🚢 Deployment Options

### Option 1: GitHub Pages (Recommended)
```bash
1. Fork this repository
2. Go to Settings → Pages
3. Source: Deploy from main branch
4. Your URL: https://yourusername.github.io/cyber-essentials-checker/
```

### Option 2: Your Website
```bash
# Just upload index.html to your web server
cp index.html /var/www/html/cyber-essentials/
```

### Option 3: Email Distribution
```bash
# Users can open the HTML file directly
# No server needed!
```

See [DEPLOYMENT_GUIDE.md](docs/DEPLOYMENT_GUIDE.md) for more options.

## 🎨 Customization

### Change Branding
```html
<!-- Edit index.html -->
<h1>🛡️ [Your Company] Cyber Essentials Checker</h1>
```

### Modify Colors
```css
/* Edit the CSS section */
background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
```

### Add Questions
See [EDITING_QUESTIONS_GUIDE.md](docs/EDITING_QUESTIONS_GUIDE.md) for detailed instructions.

### Add Save Feature
```bash
# Instructions in docs/add_save_feature.js
```

## 📊 Sample Questions

The assessment covers:

**Firewalls**
- Are all devices protected by firewalls?
- Have default passwords been changed?
- What firewall models are in use?

**Security Updates**
- Is all software licensed and supported?
- Are automatic updates enabled?
- Critical updates applied within 14 days?

**Access Control**
- Multi-factor authentication on cloud services?
- Unique accounts for each user?
- Strong password policies?

**Plus:** Malware protection, secure configuration, backups, incident response

## 🔧 Configuration

### Enable AI Analysis
The tool works standalone, but you can enable Claude API for enhanced analysis:

```javascript
// AI analysis happens automatically if the API is accessible
// No configuration needed - it falls back to local analysis if unavailable
```

### Disable AI Analysis
```javascript
// Comment out the analyzeWithClaude function call
// Tool will use local analysis only
```

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Ideas for Contributions
- [ ] Additional question templates
- [ ] Industry-specific variants (healthcare, finance, etc.)
- [ ] Export to PDF functionality
- [ ] Results comparison over time
- [ ] Integration with other frameworks (ISO 27001, NIST)
- [ ] Translations to other languages
- [ ] Mobile app wrapper

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This tool is for **assessment purposes only** and does not constitute official Cyber Essentials certification. 

- This is NOT a replacement for official certification
- Results are indicative only
- Final certification must be obtained from a Certification Body
- Cyber Essentials requirements may change - check official NCSC guidance

## 🙏 Acknowledgments

- **UK NCSC** for the Cyber Essentials scheme
- **Anthropic** for Claude API
- **Open source community** for inspiration and tools

## 📞 Support

- **Issues:** [GitHub Issues](https://github.com/yourusername/cyber-essentials-checker/issues)
- **Discussions:** [GitHub Discussions](https://github.com/yourusername/cyber-essentials-checker/discussions)
- **Email:** your-email@example.com

## 🗺️ Roadmap

- [x] Core assessment functionality
- [x] AI-powered analysis
- [x] Infrastructure inventory questions
- [x] Backup and IR questions
- [ ] PDF export
- [ ] Multi-language support
- [ ] Historical tracking
- [ ] Team collaboration features
- [ ] API for integration

## 📈 Stats

- **Lines of Code:** ~1,800
- **Dependencies:** 0 (pure vanilla JS)
- **Browser Support:** All modern browsers
- **Load Time:** < 1 second
- **Assessment Time:** 15-20 minutes

## 🌟 Star History

If you find this tool useful, please consider giving it a star! ⭐

## 📸 Screenshots

### Assessment Interface
![Assessment Interface](https://via.placeholder.com/800x400?text=Assessment+Interface)

### Results Dashboard
![Results Dashboard](https://via.placeholder.com/800x400?text=Results+Dashboard)

### Mobile View
![Mobile View](https://via.placeholder.com/400x800?text=Mobile+View)

---

**Made with ❤️ for the cybersecurity community**

*Helping small businesses achieve Cyber Essentials certification, one assessment at a time.*
