import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Alex Yang's Physics Experiments
      </h1>
      <p className="mb-4">
        {`I am Alex Yang, a student from University of Toronto. 
        These are the experiments I made during my undergraduate.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
