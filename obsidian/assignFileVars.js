module.exports = (params) => {
  params.variables["currentFileName"] = this.app.workspace.activeEditor.file.basename;
  params.variables["currentFilePath"] = this.app.workspace.activeEditor.file.path;
  params.variables["currentFileUrl"] = genObsUrl(this.app.vault.getName(), this.app.workspace.activeEditor.file.path);
};

function genObsUrl(vaultName, path) {
  let pathFmt = path.replace(/ /g, "%20");
  pathFmt = path.replace(/\&/g, "%26");
  return `obsidian://open?vault=${vaultName}&file=${pathFmt}`
}
