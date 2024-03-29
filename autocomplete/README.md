# Autocomplete challenge

Autocomplete is a common component in modern web applications. However, a simple input field hides a lot of complexity underneath. Let's build one.

## Briefing

Feel free to choose any tech stack you're comfortable with.

## Quest 1 - Get the development environment ready

Imagine this is a long-term project that you will work on with a team. Of course, you could go for a single `index.html` and put all the code there, but be prepared to justify that decision.

## Quest 2 - Build the autocomplete component

The component should look something like this:

![Image of autocomplete field](autocomplete.png)

The task is vague on purpose. Dive as deep as you can, flex your Frontend knowledge, and note your decisions. We'll ask about them.

You will need some data for autocomplete, so here's Zyro categories API: https://ai-qa-wizard-text-similarity-dev-yls6dto53q-uc.a.run.app/inference

Send a `POST` request with a JSON body

```json
{
  "input": "flower",
  "limit": 10
}
```

and you should receive a JSON response:

```json
[
  "Flower Club",
  "Flower Shop",
  "Flower Parade",
  "Florist",
  "Wholesale Florist",
  "Flower School",
  "Flower Illustrator",
  "Flower and Plant Photographer",
  "Flower Photographer",
  "Holiday Decoration Store"
]
```

## Quest 3 - Show it to the world

Put the code up on a public Github repo and deploy it in any way you'd like. We'll then hop on a call and discuss how did this project go 🚀
