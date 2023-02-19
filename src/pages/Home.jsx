import React, { useState } from "react";
import { Card, FormField, Loader } from "../components";

// RenderCard function
const RenderCards = ({data, title}) => {
  if(data?.length > 0) 
    return data.map((post) => <Card key={post._id} {...post}/>)
    return <h2 className="italic mt-10 text-rose-500">{title}</h2>
}

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("ans");

  return (
    <section className="max-w-7xl px-12 mx-auto">
      <div className=" font-medium text-2xl text-center">
        <h1>Community Generated images</h1>
      </div>
      <div className="mt-10">
        <FormField />
      </div>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <>
            {searchText && (
              <h2 className="mt-10">
                <strong>showing result for : </strong>
                <span className="italic">
                  {searchText}
                </span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards data={[]} title="No search result" />
              ) : (
                <RenderCards data={[]} title="No post found!" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Home;
