import CancelReasons from './cancel-reasons.js';

// Script-tag build: exposes window.CancelReasons and auto-attaches to
// elements marked with data-cancel-reasons.
if (typeof document !== 'undefined') {
  const run = () => CancelReasons.autoInit();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
}
export default CancelReasons;
