// This script adds save/load functionality to the Cyber Essentials Checker
// Instructions: Add this code block before the closing </script> tag in the HTML

// Save current assessment to localStorage
function saveAssessment() {
    const responses = collectResponses();
    const saveData = {
        responses: responses,
        timestamp: new Date().toISOString(),
        version: '1.0'
    };
    
    try {
        localStorage.setItem('cyber-essentials-assessment', JSON.stringify(saveData));
        
        // Show success message
        const saveBtn = document.getElementById('save-btn');
        const originalText = saveBtn.innerHTML;
        saveBtn.innerHTML = '✅ Saved!';
        saveBtn.style.background = '#28a745';
        
        setTimeout(() => {
            saveBtn.innerHTML = originalText;
            saveBtn.style.background = '';
        }, 2000);
        
    } catch (error) {
        alert('Unable to save assessment. Please check your browser settings.');
        console.error('Save error:', error);
    }
}

// Load saved assessment from localStorage
function loadAssessment() {
    try {
        const saved = localStorage.getItem('cyber-essentials-assessment');
        if (!saved) {
            alert('No saved assessment found.');
            return;
        }
        
        const saveData = JSON.parse(saved);
        const responses = saveData.responses;
        
        // Restore radio button selections
        Object.keys(responses.controls).forEach(control => {
            Object.entries(responses.controls[control]).forEach(([questionId, answer]) => {
                const radio = document.querySelector(`input[name="${questionId}"][value="${answer.value}"]`);
                if (radio) {
                    radio.checked = true;
                    radio.parentElement.classList.add('selected');
                    if (answer.value === 'fail') {
                        radio.parentElement.classList.add('fail');
                    }
                }
            });
        });
        
        // Restore text inputs
        if (responses.textInputs.outdatedSoftware) {
            const input = document.getElementById('q3_5');
            if (input) input.value = responses.textInputs.outdatedSoftware;
        }
        if (responses.textInputs.deviceCount) {
            const input = document.getElementById('q6_4');
            if (input) input.value = responses.textInputs.deviceCount;
        }
        if (responses.textInputs.cloudServices) {
            const input = document.getElementById('q6_5');
            if (input) input.value = responses.textInputs.cloudServices;
        }
        
        // Show success message
        const savedDate = new Date(saveData.timestamp).toLocaleString();
        alert(`Assessment loaded from ${savedDate}`);
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
    } catch (error) {
        alert('Unable to load saved assessment. The data may be corrupted.');
        console.error('Load error:', error);
    }
}

// Clear saved assessment
function clearSavedAssessment() {
    if (confirm('Are you sure you want to delete your saved assessment? This cannot be undone.')) {
        localStorage.removeItem('cyber-essentials-assessment');
        alert('Saved assessment deleted.');
    }
}

// Check if there's a saved assessment on page load
window.addEventListener('load', () => {
    const saved = localStorage.getItem('cyber-essentials-assessment');
    if (saved) {
        const saveData = JSON.parse(saved);
        const savedDate = new Date(saveData.timestamp).toLocaleString();
        
        // Show notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #fff3cd;
            border: 2px solid #ffc107;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            max-width: 350px;
        `;
        notification.innerHTML = `
            <div style="font-weight: bold; margin-bottom: 8px; color: #856404;">
                📂 Saved Assessment Found
            </div>
            <div style="font-size: 14px; color: #856404; margin-bottom: 12px;">
                Last saved: ${savedDate}
            </div>
            <div style="display: flex; gap: 10px;">
                <button onclick="loadAssessment(); this.parentElement.parentElement.remove();" 
                        style="flex: 1; padding: 8px; background: #028090; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">
                    Load
                </button>
                <button onclick="this.parentElement.parentElement.remove();" 
                        style="flex: 1; padding: 8px; background: white; color: #666; border: 1px solid #ddd; border-radius: 4px; cursor: pointer;">
                    Dismiss
                </button>
            </div>
        `;
        document.body.appendChild(notification);
    }
});

// Add save/load buttons to the UI
// Insert this HTML before the "Analyze" button:
/*
<div style="display: flex; gap: 15px; margin-top: 20px; padding: 20px; background: #f8f9fa; border-radius: 8px;">
    <button id="save-btn" onclick="saveAssessment()" class="export-button" style="flex: 1;">
        💾 Save Progress
    </button>
    <button onclick="loadAssessment()" class="export-button" style="flex: 1;">
        📂 Load Saved
    </button>
    <button onclick="clearSavedAssessment()" class="export-button" style="flex: 1; border-color: #dc3545; color: #dc3545;">
        🗑️ Clear Saved
    </button>
</div>
*/

console.log('Save/Load functionality added successfully!');
