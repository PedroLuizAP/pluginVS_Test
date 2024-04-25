import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('jt.helloWorld', () => {
        // JSON padrão para inserir no editor
        const jsonContent = `{
    "nome": "Exemplo",
    "idade": 30,
    "email": "exemplo@email.com"
}`;

        // Obtém o editor de texto ativo
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            // Insere o JSON padrão no editor
            editor.edit(editBuilder => {
                editBuilder.insert(editor.selection.start, jsonContent);
            });
        } else {
            vscode.window.showInformationMessage('Abra um arquivo para inserir o JSON.');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
