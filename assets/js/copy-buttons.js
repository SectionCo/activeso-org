// Copy buttons: write their data-copy value to the clipboard and confirm in place.
for (const button of document.querySelectorAll("[data-copy]")) {
	// The resting label is fixed, never captured from a mid-feedback state.
	const original = button.textContent.trim();
	let resetTimer = null;

	button.addEventListener("click", async () => {
		// A re-click inside the feedback window cancels the pending reset first,
		// so a stale timer can never restore a transient label.
		clearTimeout(resetTimer);

		try {
			await navigator.clipboard.writeText(button.dataset.copy);
			button.textContent = "copied";
		} catch {
			button.textContent = "failed";
		}

		resetTimer = setTimeout(() => { button.textContent = original; }, 1200);
	});
}