import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

export default class MyPlugin extends Plugin {
	async onload() {
			new Notice('This is a notice!');
		};
	onunload() {
			new Notice('This is a notice!');
	}
}
