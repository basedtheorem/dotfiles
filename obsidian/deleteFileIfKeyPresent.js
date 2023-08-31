module.exports = (params) => {
  let keyElem = this.app.workspace.activeEditor.contentEl.querySelector('.cm-inline-code');
  if (keyElem === null) return;
  if (keyElem.textContent == 'DELETE_THIS_FILE') {
    this.app.vault.delete(this.app.workspace.activeEditor.file);
  }
};
