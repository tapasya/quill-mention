import Quill from 'quill';

const Embed = Quill.import('blots/embed');


class MentionBlot extends Embed {
  static create(data) {
    const node = super.create();
    const denotationChar = document.createElement('span');
    denotationChar.className = 'ql-mention-denotation-char';
    denotationChar.innerHTML = data.denotationChar;
    node.appendChild(denotationChar);
    node.innerHTML += data.value;
    node.addEventListener('click', ()=> {
        this.clickHandler.call(this.clickContext, data);
    })
    return MentionBlot.setDataValues(node, data);
  }

  static setDataValues(element, data) {
    const domNode = element;
    Object.keys(data).forEach((key) => {
      domNode.dataset[key] = data[key];
    });
    return domNode;
  }

  static value(domNode) {
    return domNode.dataset;
  }
}

MentionBlot.blotName = 'mention';
MentionBlot.tagName = 'span';
MentionBlot.className = 'mention';
MentionBlot.clickContext = {};
MentionBlot.clickHandler = function(data) {
  console.log(data);
}

Quill.register(MentionBlot);

export default MentionBlot;
