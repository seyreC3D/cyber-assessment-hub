# Contributing to Cyber Essentials Readiness Checker

First off, thank you for considering contributing! 🎉

The following is a set of guidelines for contributing to this project. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Code of Conduct

Be kind, be respectful, be constructive. That's it!

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed**
- **Explain what behavior you expected instead**
- **Include screenshots if relevant**
- **Mention your browser and operating system**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List examples of how it would be used**

### Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
6. Push to the branch (`git push origin feature/AmazingFeature`)
7. Open a Pull Request

#### Pull Request Guidelines

- Keep changes focused - one feature per PR
- Update documentation if needed
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Follow the existing code style
- Write clear commit messages
- Update CHANGELOG.md if applicable

## Development Setup

No setup needed! Just open `index.html` in your browser.

For testing:
1. Open `index.html` in browser
2. Complete the assessment
3. Verify results display correctly
4. Check browser console for errors (F12)

## Style Guide

### HTML
- Use semantic HTML5 elements
- Keep accessibility in mind (ARIA labels where needed)
- Maintain consistent indentation (4 spaces)

### CSS
- Use existing color variables
- Keep mobile-first approach
- Test responsive design

### JavaScript
- Use ES6+ features
- Add comments for complex logic
- Keep functions focused and small
- Handle errors gracefully

## Question Contribution Guidelines

### Adding New Questions

When adding questions:
1. Follow existing question structure
2. Use appropriate `data-control` value (1-6)
3. Set `data-critical` correctly (true for mandatory)
4. Use unique `name` attributes
5. Provide helpful context text
6. Test the question in the assessment

### Question Template
```html
<div class="question" data-control="X" data-critical="true/false">
    <div class="question-text">Clear, specific question?</div>
    <div class="question-help">Helpful context for the user</div>
    <div class="options">
        <label class="option">
            <input type="radio" name="qX_Y" value="pass">
            <span>Clear answer option</span>
        </label>
        <!-- More options -->
    </div>
</div>
```

## Documentation

When updating documentation:
- Keep it clear and concise
- Use examples where helpful
- Update all relevant docs files
- Check for broken links

## Commit Message Guidelines

Use clear, descriptive commit messages:

- **Good:** "Add backup frequency question to scope section"
- **Good:** "Fix mobile layout issue in results display"
- **Bad:** "Update"
- **Bad:** "Fix bug"

Format:
```
<type>: <subject>

<body (optional)>
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

## Priority Areas for Contribution

### High Priority
- [ ] Browser compatibility testing
- [ ] Accessibility improvements
- [ ] PDF export feature
- [ ] Results email functionality
- [ ] Additional question templates

### Medium Priority
- [ ] Industry-specific variants
- [ ] Translation to other languages
- [ ] Integration examples
- [ ] Video tutorials

### Low Priority
- [ ] UI enhancements
- [ ] Additional themes
- [ ] Easter eggs 😄

## Ideas We'd Love to See

- Industry-specific question sets (healthcare, finance, education)
- Integration with other security frameworks
- Automated remediation tracking
- Progress tracking over time
- Team collaboration features
- API for integration with other tools
- Mobile app wrapper
- Browser extension
- Slack/Teams integration
- Automated reporting

## Testing Checklist

Before submitting a PR, verify:
- [ ] Works in Chrome
- [ ] Works in Firefox
- [ ] Works in Safari
- [ ] Works in Edge
- [ ] Mobile responsive
- [ ] No console errors
- [ ] All questions working
- [ ] Analysis produces results
- [ ] Documentation updated
- [ ] CHANGELOG updated

## Questions?

Feel free to:
- Open an issue
- Start a discussion
- Reach out to maintainers

## Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Acknowledged in README

Thank you for contributing! 🙏
