---
title: "Hands-On: Debunking GenAI Myths with Real-Life Examples"  
date: 2024-11-07  
description: Explore common myths about GenAI through practical scenarios that highlight its strengths and limitations.  
menu:  
  sidebar:  
    name: Hands-On - Debunking AI Myths  
    identifier: debunking_ai_myths  
    parent: gen_ai_week_6  
    weight: 20241107  
hero: hero.webp  
tags: ["Week 6", "GenAI Myths", "AI Limitations", "Practical Examples"]  
categories: ["AI Insights", "Learning with AI"]
summary: "Uncover and challenge common misconceptions about GenAI with hands-on examples that demonstrate its capabilities and boundaries."
draft: false  
---

<p style="text-align: right;">  
<em>Image by DALL-E.</em>  
</p>

{{< subscribe-button sub_text="Subscribe" email_text="Enter your email" send_text="Submit" >}}

---

## Exploring Common Myths Through Hands-On Scenarios

In [Monday’s article](/posts/gen_ai/week_06/article/), we debunked some widespread myths about GenAI. Today, we’ll put these insights into practice with specific examples to illustrate where GenAI falls short. By seeing real outputs, we’ll understand how to navigate GenAI’s capabilities and limitations with confidence.

{{< vs 3 >}}

### The Tool of the Week: Use Constraints to Focus Output

Before diving in, let's spotlight the featured tool:

{{< mark >}}Use Constraints to Focus Output{{< /mark >}}

Setting constraints like word limits, formatting, content type, helps guide GenAI’s responses to fit your specific needs. While the results may not always be perfect, they show the potential of using boundaries to shape AI’s output.


{{< vs 2 >}}

---

{{< vs 2 >}}


### 1. GenAI Doesn't Know Everything

I put GenAI to the test by asking about my research papers. It then responded simple, “I don’t have information on that,” indicating that GenAI, despite being well-read, isn’t omniscient.

{{< copyable >}}
Without searching the web: tell me about a research paper from Fernando Yanez, a PhD candidate at the University of Toronto
{{< /copyable >}}

<p style="text-align: right; font-size: 10px;">  
<em>Copy the <b>prompt</b> and try it with <a href="https://chatgpt.com">ChatGPT</a></em>  
</p>

**Result**: The AI’s response made it clear—its knowledge has limitations, and its results may not include content that are not widely publicized, especially if it hasn’t been incorporated into its training set. 


**Takeaway**: Use GenAI for broad insights but verify details on niche topics or personal work independently.


{{< img src="/posts/shortcodes/week6_tutorial_img_1.png" style="max-width: 100%; height: auto;" align="center" title="ChatGPT showing lack of recent knowledge." >}}



{{< vs 2 >}}

---

{{< vs 2 >}}


### 2. GenAI Doesn't Always Deliver the Right Answer

Even after following up with questions about my pre-October 2023 research, GenAI was unable to provide an answer. This underscores that GenAI can sometimes fail to retrieve lesser-known information, even if it's publicly available, because such data may not be sufficiently represented in its training dataset.

{{< copyable >}}
Without searching the web: then tell me about his research prior to October 2023
{{< /copyable >}}

<p style="text-align: right; font-size: 10px;">  
<em>Copy the <b>prompt</b> and try it with <a href="https://chatgpt.com">ChatGPT</a></em>  
</p>

**Observation**: In this instance, GenAI couldn't provide the desired information. However, there are cases where it generates summaries that sound credible but may lack factual accuracy upon verification. This demonstrates that even with extensive training data, GenAI's responses might not always align with the actual facts.

**Takeaway**: Use GenAI's outputs as starting points or ideas for further exploration rather than accepting them as definitive answers.


{{< img src="/posts/shortcodes/week6_tutorial_img_2.png" style="max-width: 100%; height: auto;" align="center" title="ChatGPT doesn't have access to every information prior to its cutoff date." >}}


{{< vs 2 >}}

---

{{< vs 2 >}}



### 3. GenAI’s Output is as Good as Its Prompt

The quality of GenAI's output hinges on the clarity and detail of its input. Broad prompts result in generic content, while precise prompts guide GenAI to generate tailored, meaningful results. A well-crafted, specific prompt can dramatically elevate the response quality.

**Here is an example of a generic prompt**:
{{< copyable >}}
Generate creative content in 100 words.
{{< /copyable >}}

<p style="text-align: right; font-size: 10px;">  
<em>Copy the <b>prompt</b> and try it with <a href="https://chatgpt.com">ChatGPT</a></em>  
</p>

**Result**: The response to this is typically very general and not customized to our needs.


{{< img src="/posts/shortcodes/week6_tutorial_img_3.png" style="max-width: 100%; height: auto;" align="center" title="ChatGPT gives a generic response to a prompt without many details." >}}


{{< vs 2 >}}


**Now here is an example of a detailed prompt**:
{{< copyable >}}
In 100 words, no more, no less, create a story set on an upside-down planet where plants speak and animals are mute. In this world, there is no wind; even so, plants move consciously as it is part of their multimodal language. The third element of this multimodal language between plants is synaptic connections between roots.
{{< /copyable >}}

<p style="text-align: right; font-size: 10px;">  
<em>Copy the <b>prompt</b> and try it with <a href="https://chatgpt.com">ChatGPT</a></em>  
</p>

**Result**: With a detailed prompt like this, GenAI can craft more vivid and focused narratives.

{{< img src="/posts/shortcodes/week6_tutorial_img_4.png" style="max-width: 100%; height: auto;" align="center" title="ChatGPT will improve its response based on a detailed prompt." >}}


{{< vs 2 >}}


**Conclusion**: The more context and detail you provide in your prompt, the higher the quality of the response. Investing time in creating a clear, specific prompt can lead to more impressive, targeted results.


{{< vs 2 >}}

---

{{< vs 2 >}}


### 4. GenAI Doesn't Understand Context as Well as Humans Do

In the previous prompt example, we noted that plants in this fictional world use a multimodal means of communication with three elements. We explicitly describe the kinetic and synaptic aspects. However, sound was implied through the phrase “an upside-down planet where plants speak and animals are mute.” It is easy for us to infer that, unlike mute animals, plants produce sounds in such a world. Yet, GenAI mentioned “silent debates” among the plants. This oversight highlights its struggle with nuanced context. While GenAI correctly included movement and synaptic connections, it missed the auditory element implied in the prompt. 

**Insight**: This example shows that even with detailed prompts, GenAI may fail to fully comprehend complex relationships or implied details, emphasizing the need for human review to ensure accuracy and depth.




{{< vs 2 >}}

---

{{< vs 2 >}}

### 5. GenAI Doesn't Handle Every Task Perfectly

Adding constraints to prompts can test GenAI’s precision. In this case, even when given precise instructions to write 100 words—not more, not less—both generated stories had 99 words. This shows that GenAI may fail in some tasks requiring exact adherence to detailed criteria.


**Insight**: While GenAI can approach the target closely, human oversight ensures adherence to precise details.


{{< vs 2 >}}

---

{{< vs 2 >}}

### Tool of the Week Reflection

Using constraints like word limits can guide AI effectively. Despite falling short by one word, it stayed within the general boundary, preventing overly long responses. This shows how leveraging constraints focuses output, even if perfection isn't guaranteed.


{{< vs 2 >}}

---

{{< vs 2 >}}


## Final Thoughts: Balance, Not Perfection

These examples demonstrate that our _**Thinking Buddy**_, while powerful, has its limitations. Understanding where it may falter—be it in handling precise instructions, interpreting nuanced prompts, or drawing from specific data—enables us to use it more effectively as a _**Thinking Buddy**_. When approached with clear prompts and constraints, GenAI’s assistance can be invaluable, but human oversight ensures the best results.


{{< weekly-button path="/posts/gen_ai/week_06/article/" text="Weekly Article" >}}