---
title: Internship @ ML6
date: "2024-05-31T15:31:12.3675"
---

Internships are like that first step into adulthood, where you mix all the knowledge from school with real-life work stuff. Almost every student has to do them. It's an exciting time where you learn new things, meet new people, and get a taste of what it's like to work in a company.
Curious about my internship experience at ML6? Keep reading!

---

**Origin Story**

So how did it all start? Initially, I wanted to do my internship in Hong Kong. I knew my school had a partnership with the Belgian-Luxembourg Chamber of Commerce in Hong Kong, so I reached out to them. Besides this, I also sent my resume and motivation letter to 20 companies in the city. I received a few responses, but none of them were positive. I was a bit disappointed but didn't give up.

I set a deadline for myself to find an internship in Hong Kong by the end of September 2023. Otherwise, I would start looking for companies in Belgium.

I attended an internship fair organized by my school, where you could speed-date with different companies. That's where I first met ML6, and I was immediately interested in the brainpower and culture of the company.

## Who is ML6?

ML6 is an AI consultancy company that helps businesses implement AI solutions. They have a team of 100 people with offices in Ghent, Amsterdam, Berlin, and London. They focus on big institutions and companies, helping them implement AI solutions in their business processes. The team consists mainly of data and machine learning engineers, and a small number of software engineers.

## Onboarding process

**1. Introduction videos**

To be honest, this was the hardest part of the whole onboarding process. I was a bit nervous to record myself. It just felt weird to talk to a camera. I had to make a video where I introduced myself, explained what I value, and why I'm studying AI. Then there was a second video where I had to explain why I chose ML6 and which domains within the company I found interesting. This took me a couple of retakes to get it right.

**2. Mug coding challenge**

This is a coding challenge where you have to make a AI model to classify mug images based on their color.

For me, the coding part was the easiest. I spent the most time testing with Google Cloud Vertex AI. They provided a good README for this but the cloud is always a bit tricky when you're not used to it.

The threshold for passing the challenge was 75% accuracy. I first got a score of 75.4%, and I wasn't really happy with that margin. I wanted to get a score of 80%. So I tried a few more things and finally got a score of 81%.

**3. Interview call**

This last step was a 1-hour call with the squad lead of one of the domains you chose from step 1. They asked me again about my background, my motivation, and my expectations for the internship. They also asked some questions about my personal projects and AI knowledge. At the end, they told me the internship topics that were open, and what I could potentially work on. They didn't tell me if I was accepted or not, but they said they would let me know in a few weeks.

So after a few weeks of waiting, I received good news. I got accepted for the internship. The first feeling was relief. I was happy that my internship search was over and I didn't have to worry about the deadline for finding an internship. Besides this, an internship at ML6 felt really exciting, and I was ready to start.

## Internship Topic

My internship topic is "Evaluation of RAG." For those who don't know, RAG is a combination of techniques that generate answers to your questions based on a given text. The goal of my internship is to evaluate the performance and use the insights to improve it.

<figure>
    <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*LYApKuxzzmvFECqwYk61wg.png" alt="RAG" style="max-width: 100%;">
    <figcaption style="color: grey; font-size: 8px;">Source: https://blog.ml6.eu/leveraging-llms-on-your-domain-specific-knowledge-base-4441c8837b47</figcaption>
</figure>

This solution makes searching for information in large text corpuses like PDFs much easier and more time-saving.

I'm developing an internal RAG solution for ML6 with GCP. The data is a collection of all the documents and other relevant information that is shared within the company. For example, if employees have questions about sick leave procedures or travel guidelines to foreign offices, they can ask the RAG, and it will give them the answer.

For the evaluation part, there are some metrics we can use to evaluate the performance. Some can be calculated, others use an LLM judge. Some metrics are: Hit Rate, Mean Reciprocal Rank (MRR), Mean Average Precision (MAP), Normalized Discounted Cumulative Gain (NDCG), Answer Relevance, Context Relevance, Groundedness, etc.

## Internship period

My internship at ML6 started on February 12th and ended on May 25th. This is a total of 13 weeks (excluding the 2-week easter holidays). I'm working 4 days a week, 8 hours a day.

I remember the first day like it was yesterday. I was a bit nervous because I didn't know what to expect. I arrived at the office with some other interns, and we were welcomed by someone from HR.
I had already met my mentor once when singing the internship contracts, so I knew who to look for. My mentor showed me around the office and introduced me to some of the other ML6 agents (colleagues). After that, I had a meeting with her where she explained the internship topics and its goals.

After our conversation, I remember asking my mentor: "What do I need to work on?". I had this topic "RAG evaluation" but was a bit overwhelmed because I didn't know where to start. I learned to reach out to other colleagues and ask for their opinions to see if I was on the right track. As a more introverted person, this was a bit out of my comfort zone. But I learned quickly that it's okay to ask for help and that people are always willing to help you.

In the first few weeks, I read a lot of papers/articles about RAG, tried to understand the topic and the techniques used, and tested some frameworks and tools for building a RAG chatbot. YouTube also helped me also a lot on getting a better understanding of the topic. Eventually, I started to build my own RAG and evaluate it.

By week 3 or 4, I started to propose some project ideas to my mentor that I wanted to build. Because just doing research and reading papers wasn't really my thing. I wanted to see if I could improve the performance of RAG solutions. The goal of the internship is to evaluate RAG and use the insights to improve it. So I thought it was a good idea to try some new things and see if they would work. Most importantly, I aimed to discover some findings that could be useful for the company in their chatbot solutions.

After a few weeks of experimenting and exchanging ideas with my mentor, the question came up: "Wouldn't it be nice to make a RAG solution internally?". This was a great idea because it would be a great way for me to build a RAG solution, evaluate it, and have a real use case. In the first week of starting the project, I made a plan of what I needed to build and how I would do it. I made use of the basic RAG boilerplate architecture provided by the company and started to build on top of that. Google Cloud Platform was my go-to platform for this project as ML6 has a great partnership with Google.

Once I gathered all the information, I started to code. It took me about 3 weeks to build the first version of the chatbot. This includes the Terraform setup and the backend using all Google Cloud services. This went pretty smoothly, and I wasn't expecting to finish it that fast because I had never worked with GCP and Terraform before. From there on, I started to iterate and improve the solution as much as possible. Since my internship is about evaluating the RAG, I focused more on the evaluation part than improving the RAG itself.

By regularly syncing with my mentor and asking other ML6 agents for feedback, I was able to get some valuable insights by doing evaluation on both synthetic datasets and human question-ground truth pairs.

In the last 3 weeks of the internship, I focused more on finalizing the project and school work. I made a small Streamlit demo app, which wasn't really in the scope of the project, but I wanted to show the company what I had built. At ML6, every intern has to do a debrief presentation at the end of their internship. This is a +/- 20-minute presentation where every ML6 employee is invited. This is the moment where you show what you have built and what you have learned during the internship. I was a bit nervous because my topic "RAG" is something many employees have already worked on and have a lot of knowledge about. I reduced the stress by preparing well and practicing the presentation a few times for multiple people in 1-on-1 sessions where I expected the most questions from. Eventually, the presentation went well, and I could answer all the questions that were asked. At the end, I received an ML6 blanket as a gift. I've already used it a few times, and it's very soft. I'm very happy with it!

Finally, in the last week, I did some code cleanup and wrote some documentation in the project repository. This was because another intern will take over the project and I wanted to ensure that they could continue where I left off. The next person will implement the chatbot in a Google Chat space instead of the Streamlit app and make some improvements to the RAG.

I also prepared my TED talk during this period, which is the defense presentation of my bachelor thesis because I had to present it as a test for my mentor at school.

## Reflections

The biggest learning moment for me was working independently. I had to figure out what I needed to do and how I would do it. I had to make a plan and stick to it. This is something I didn't have to do a lot in school. I was always guided by teachers and had a clear structure of what I needed to do. Now I had to figure it out myself.

What I really like about being at ML6 is the brainpower present in the company. Everyone is very smart and has a lot of knowledge about AI. This makes it a great place to learn new things. At first I felt like I didn't really fit between all those smart people. But I quickly learned that everyone has their own expertise and that they are also learning new things every day. Everyone was very open to helping you. If you had a question, you could always ask someone and book a short meeting. The agents/employees are also very young. The average age is around 28 years old, especially in Belgium. This makes it a very dynamic and fun place to work.

There's also a lot of freedom. You have your topic, and you work on whatever you want. You can ask for help if you need it, but you are responsible for your own work. I had a weekly sync with my mentor where I can ask questions and discuss my progress. They are very flexible with coming to the office. You come to the office when you want, you just need to meet your deadlines.

I also discovered something new. My interest in AI has narrowed down. I used to be interested in everything related to AI (still am). But now I know that I want to work with generative AI like diffusion models and transformer models. Multimodal models made me very curious, and I want to explore this further. I talked with Niels (an employee at ML6 and HuggingFace) about this topic and I got inspired by his work and YouTube videos. It's my goal for this summer to dive deeper into this topic and fine-tune some models myself.

## Conclusion

Choosing ML6 for my internship was a great decision. Many new things were learned, and a lot of interesting people were met. I'm happy with the final result of my internship project. ML6 is highly recommended for anyone looking for an internship in AI. I'm looking forward to applying my new knowledge to my future projects.

PS: I got accepted for Open Summer of Code 2024 (osoc.be) in July. I'll write a blog post about the experience in August.

<div style="display: flex; flex-wrap: wrap; gap: 15px">
    <img id="gif" src="https://media1.tenor.com/m/DwyZ0JvXGqwAAAAd/im-ryan-the-intern.gif" style="flex: 2; width: 300px;">
    <img id="gif" src="https://media1.tenor.com/m/dEyUG4nwn1gAAAAC/robert-downey-jr-shocked.gif" style="flex: 1; width: 150px;">
</div>
