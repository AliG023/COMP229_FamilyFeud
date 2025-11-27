import PageSection from "./PageSection";

/**
 * @file VerifyAction.jsx
 * @author Pierre Moreau
 * @since 2025-11-27
 * @purpose Confirm or cancel a user action.
 */
export default function VerifyAction({ action, onConfirm, onCancel }) {

    return (
        <div className="warning-backdrop" onClick={(e) => e.stopPropagation()}>
            <div className="warning-container">
                <PageSection title="Confirm Action">
                    <p>Are you sure you want to {action} this item?</p>
                    <p>This action cannot be undone.</p>
                    <div className="warning-action-buttons">
                        <button className="primary-button" onClick={(e) => onConfirm(e)}>Confirm</button>
                        <button className="cancel-button" onClick={() => onCancel()}>Cancel</button>
                    </div>
                </PageSection>
            </div>
        </div>
    );
};