import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

class FaqsAccordions extends Component {
  state = {
    activeIndex: 0,
    accordions: [
      {
        question: "What is a dog?",
        answer: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
        be found as a welcome guest in many households across the world.`
      },{
        question: "What kinds of dogs are there?",
        answer: `There are many breeds of dogs. Each breed varies in size and temperament. Owners often
        select a breed of dog that they find to be compatible with their own lifestyle and
        desires from a companion.`
      },{
        question: "How do you acquire a dog?",
        answer: `Three common ways for a prospective owner to acquire a dog is from pet shops, private
        owners, or shelters.`
      }
    ]
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex, accordions } = this.state

    return <Accordion fluid styled>
            {
              accordions.map((a, index) => (<div key={`acc-${index}`}>
                <Accordion.Title active={activeIndex === index} index={index} onClick={this.handleClick}>
                  <Icon name='dropdown' />
                  {a.question}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === index}>
                  <p>
                    {a.answer}
                  </p>
                </Accordion.Content>
                </div>
              ))
            }
          </Accordion>
  }
}

export default FaqsAccordions;
