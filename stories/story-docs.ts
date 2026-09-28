export const storyDoc = (story: string) => ({
	docs: { description: { story } },
});

export const componentDoc = (component: string) => ({
	docs: { description: { component } },
});
