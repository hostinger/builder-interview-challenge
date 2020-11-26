# Redirects challenge

## Project setup
```sh
# Install dependencies
npm install
# Run src/index.[js|ts] on node
npm start
# Run tests
npm test
```

## The problem

We have quite a lot templates at https://zyro.com/templates. You can see any template preview by visiting https://zyro.com/preview/{templateId}. There is one problem though – some template IDs don't match the template names:
![template ID and name mismatch](https://user-images.githubusercontent.com/52653560/83496281-8a0d6b00-a4c1-11ea-9c07-5e04c68f0f08.png)
As you can see, the template ID is `modernart`, but the name is `Ayomide`. We want to fix that.

But what if the someone linked https://zyro.com/preview/modernart in their blog? The link would break if we would change the ID. We don't want that to happen, so we'll set up some 301 redirects.

## Input

Here's the IDs we need to update:

| old ID | new ID |
| --- | --- |
| bakery | sugaro |
| fashion | june |
| wedding | kenzie |
| Redfern | redfern |
| startup | inves |
| modernart | ayomide |

Oh, by the way, https://zyro.com supports multiple locales, so you'll need to take care of redirects for each locale too.

| locale ID |
| --- |
| en (default) |
| de |
| ru |
| es |
| mx |
| lt |
| in |

## Output

Our redirect system needs a configuration json in a format like this:

```json
{
	"{path from}": "{path to}"
}
```

So in this case, your output should look something like this:

```json
{
	"/preview/modernart": "/preview/ayomide",
	"/fr/preview/modernart": "/fr/preview/ayomide",
	...
	"/preview/photography": "/preview/freya",
	"/de/preview/photography": "/de/preview/freya"
	...
}
```

As you can see, since `en` locale is default one, it is not prepended to the path.

## Requirements

- Use Javascript or Typescript to generate the redirect paths. Write the output to .json file indented with 2 spaces.
- (Optional) Write tests for your function(s).