const url = "https://jsonplaceholder.typicode.com/todos";

const fetchTodos = async () => {
  await new Promise((resolve) => setInterval(resolve, 500));

  const res = await fetch(url);
  const data = res.json();
  return data;
};

const page = async () => {
  return (
    <>
      <div className="flex justify-center mt-8">
        <h1 className="text-5xl text-primary font-bold">Home</h1>
      </div>
      <div className="mx-15 my-5">
        <h1 className="text-2xl underline text-secondary">Lorem</h1>
      </div>
      <div className="mx-15 my-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          fermentum, metus at suscipit posuere, magna enim gravida mi, id
          tincidunt metus tellus tempus turpis. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Suspendisse
          gravida commodo velit in malesuada. In vitae blandit nulla. Praesent
          molestie ac massa sed tincidunt. Vivamus aliquet mollis massa, at
          malesuada nulla congue sed. Praesent ac enim dui.
        </p>
      </div>
      <div className="mx-15 my-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          fermentum, metus at suscipit posuere, magna enim gravida mi, id
          tincidunt metus tellus tempus turpis. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Suspendisse
          gravida commodo velit in malesuada. In vitae blandit nulla. Praesent
          molestie ac massa sed tincidunt. Vivamus aliquet mollis massa, at
          malesuada nulla congue sed. Praesent ac enim dui.
        </p>
      </div>
    </>
  );
};

export default page;
