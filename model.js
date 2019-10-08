var TodoApp;
(function (TodoApp) {
    var Model;
    (function (Model) {
        var TodoState;
        (function (TodoState) {
            TodoState[TodoState["New"] = 1] = "New";
            TodoState[TodoState["Active"] = 2] = "Active";
            TodoState[TodoState["Completed"] = 3] = "Completed";
            TodoState[TodoState["Deleted"] = 4] = "Deleted";
        })(TodoState || (TodoState = {}));
    })(Model = TodoApp.Model || (TodoApp.Model = {}));
})(TodoApp || (TodoApp = {}));
