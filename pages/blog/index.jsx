import React from "react";
import { Social } from "../../src/components/social";

function Blog({ data: { social } }) {
  return (
    <section className="container blog_content">
      <article className="content ">
        <header>
          <h2 className="is-size-2 blog_title">
            SEO On-Page en las principales eCommerce en Santa Cruz - Bolivia
          </h2>
        </header>
        <section className="blog_body">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque amet
            aliquid est tempora incidunt omnis, fuga libero tenetur placeat ex
            sapiente nemo maxime nostrum id ratione. Nulla quibusdam
            perspiciatis quisquam.
          </p>
          <div className="">
            <div>Metricas</div>
            <div>Multicenter</div>
            <div>Dismac</div>
            <div>Tienda Amiga</div>
            <div></div>
          </div>
        </section>
        <footer>Footer</footer>
      </article>
      <aside className="blog_aside p-5">
        Sidebar Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatem ducimus voluptatibus eos, tenetur, omnis non expedita at sunt
        iusto officiis, velit quaerat sit officia aperiam laborum laudantium
        ratione eligendi molestiae?
        <h3 className="is-size-4">Redes Sociales</h3>
        <Social social={social} />
      </aside>
    </section>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/about");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Blog;
