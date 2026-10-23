// const data = React.createElement("div", { id: "parent" },


// [React.createElement("div", { id: "child1" },

//     React.createElement("div", { id: "child2" },
//         [
//             React.createElement("h1", {}, "I am inside an h1 tag."),
//             React.createElement("h2", {}, "I am inside an h2 tag."),
//             React.createElement("h3", {}, "I am inside an h3 tag.")]
//     )
// )],
// [React.createElement("div", { id: "child3" },

//     React.createElement("div", { id: "child4" },
//         [
//             React.createElement("h1", {}, "I am inside an h1 tag of child 2"),
//             React.createElement("h2", {}, "I am inside an h2 tag of child 2."),
//             React.createElement("h3", {}, "I am inside an h3 tag of child 2.")]
//     )
// )]
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);


// root.render(data);

const Element = React.createElement("div", { id: "Parent" },[
    React.createElement("div", { id: "Child" },
        React.createElement("h1", { id: "Heading" },
            "This is inside the Two Divs")
    )
],
[
    React.createElement("div", { id: "Parent2," },
        React.createElement("h1", { id: "Heading" },
            "This is inside the Second Two  Divs")
    )
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Element);


