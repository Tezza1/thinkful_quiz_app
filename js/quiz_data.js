/*
var pathname = window.location.pathname; // Returns path only
var url      = window.location.href;     // Returns full URL
*/

// store all quiz data in an array
const css_quiz_data = [
    {
        id: 0,
        question: "You want text on your website to be double-spaced by default. Which of the following line-height values is the best way to achieve this?",
        options: ["<code>150%</code>", "<code>2em</code>", "<code>2</code>", "<code>double</code>"],
        answer: 1, 
        answerText: "<xmp>2em</xmp>",
        explanation: "You could also use <xmp>200%</xmp> Whilst <xmp>double</xmp> is not valid here."
    },
    {
        id: 1,
        question: "Which of the following CSS properties, used by itself, can cause HTML elements to overlap?",
        options: ["<code>z-index</code>", "<code>overflow</code>", "<code>background</code>", "<code>margin</code>"],
        answer: 3, 
        answerText: "<xmp>margin</xmp>",
        explanation: "Negative margins make things overlap."
    },
    {
        id: 2,
        question: "Which of the following effects is best achieved using a pseudo-element?",
        options: ["In a flexible page layout, display the first line of a paragraph in bold text.", "Display the label of a checkbox in a different color when the checkbox is checked.", "Give the even and odd rows of a table different background colors.", "Add a drop-shadow to a hyperlink when a user hovers their mouse over it."],
        answer:  0, 
        answerText:  "Display the first line of a paragraph in bold text.",
        explanation: "The other choices are all 'pseudo-classes'. A 'pseudo-class' is a particular state in which an actual HTML element can find itself. A 'pseudo-element' is a part of the document that CSS lets you style even though it isn’t an actual HTML element."
    },
    {
        id: 3,
        question: "How can you select all the PDF links?",
        options: ["<code>a[attribute='.pdf']</code>", "<code>a[href$='.pdf']</code>", "<code>href[attribute$='value']</code>", "<code>a[href^='.pdf']</code>"],
        answer: 1, 
        answerText: "<xmp>a[href$='.pdf']</xmp>",
        explanation: "The <xmp>[attribute$='value']</xmp> selector is used to select elements whose attribute value ends with a specified value. The <xmp>[attribute^='value']</xmp> selector is used to select elements whose attribute value begins with a specified value.The <xmp>[attribute*='value']</xmp> selector is used to select elements whose attribute value contains a specified value."
    },
    {
        id: 4,
        question: "Which choice means select all p elements that are anywhere preceded by a div element?",
        options: ["<code>div ~ p</code>", "<code>div > p</code>", "<code>div + p</code>", "<code>div, p</code>"],
        answer: 0, 
        answerText: "<xmp>div ~ p</xmp>",
        explanation: "<xmp>div, p</xmp> Selects all div elements and all p elements. <xmp>div > p</xmp> Selects all p elements where the parent is a div element. <xmp>div + p</xmp> Selects all p elements that are placed immediately after div elements"
    }
];

const js_quiz_data = [
    {
        id: 0,
        question: `What will the following log: <xmp>console.log(0.4 + 0.1 === "0.5");</xmp>`,
        options: ["<code>false</code>", "<code>true</code>", "<code>undefined</code>", "<code>NaN</code>"],
        answer: 0, 
        answerText: "<xmp>false</xmp>",
        explanation: `But <xmp>(0.4 + 0.1 == '0.5')</xmp> will print out true.`
    },
    {
        id: 1,
        question: `What will the following log:<xmp>
let y = "5";
let x = + y;
console.log(typeof y + " " + typeof x);</xmp>`,
        options: ["<code>string string</code>", "<code>string number</code>", "<code>string undefined</code>", "<code>string null</code>"],
        answer: 1, 
        answerText: "<xmp>string number</xmp>",
        explanation: "The unary + operator can be used to convert a variable to a number if possible, otherwise it will return <xmp>NaN</xmp>"
    },
    {
        id: 2,
        question: `What will the following log:<xmp>
let obj = {
mickey: 'mouse',
func: function() {
    let self = this;   
    (function() {
     console.log(this.mickey + ' ' + self.mickey);
    }());
}
};
obj.func();</xmp>`,
        options: ["<code>mouse mouse</code>", "<code>undefined undefined</code>", "<code>undefined mouse</code>", "<code>nothing - the function won't run</code>"],
        answer: 2, 
        answerText: "<xmp>undefined mouse</xmp>",
        explanation: "In the outer function, both “this” and “self” refer to 'obj' and can access 'mickey'. In the inner function, 'self' remains within scope while 'this' can no longer access 'obj'."
    },
    {
        id: 3,
        question: `What will the following log:<xmp>

let foo = ['this', 'array', 'is', 'full'];
let buzz = foo;
foo = [];

let foo1 = ['this', 'array', 'is', 'full'];
let buzz1 = foo1;
foo1.length = 0;

console.log(buzz + ' ' + buzz1);</xmp>`,
        options: ["<code>[] []</code>", "<code>[] [undefined]</code>", "<code>[this,array,is,full] [this,array,is,full]</code>", "<code>[this,array,is,full] []</code>"],
        answer: 3, 
        answerText: "<xmp>[this,array,is,full] []</xmp>",
        explanation: "When using <xmp>foo = []</xmp> this creates a new empty array. However, if the array is referenced anywhere else, the original array will remain unchanged. This can lead to potential bugs when solving problems. A more robust method is <xmp>foo1.length = 0</xmp> which not only clears the array but updates all reference variables that point to this original array."
    },
    {
        id: 4,
        question: `What will the following log:<xmp>

'use strict';

let output = function(){
    return 'Hello world!!!'
}
delete output;
console.log(output());</xmp>`,
        options: ["<code>ƒ(){return 'Hello world!!!'}</code>", "<code>Error message</code>", "<code>undefined</code>", "<code>Hello world!!!</code>"],
        answer: 1, 
        answerText: "Error message",
        explanation: "<xmp>Error message</xmp><xmp>Delete of an unqualified identifier in strict mode.</xmp> When in strict mode, if delete is used on a direct reference to a variable, a function argument or a function name, it will throw a SyntaxError."
    }
];

const results = [
    "<p>Please setup a meeting with your program co-ordinator to work out the best way forward</p>",
    "<p>Please speak to your mentor and put additional time aside to study each week.</p>",
    "<p>Please review and speak to your mentor.</p>",
    "<p>Pass! You are on the way.</p>",
    "<p>Nice work. You are ready for the next step in your career.</p>",
    "<p>Well done! You really know your stuff! You are ready for the next step in your career.</p>"
]
