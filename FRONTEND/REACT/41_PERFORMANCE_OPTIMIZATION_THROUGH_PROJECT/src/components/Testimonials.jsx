import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=1",
    review:
      "Amazing platform! The tutorials are well-structured and easy to follow. Highly recommended.",
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=4",
    review:
      "The content quality is excellent. I learned a lot in a short amount of time.",
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?img=8",
    review:
      "One of the best learning experiences I've had. Clean UI and great instructors.",
  },
];


export default function Testimonials() {
  return (
    <div className="flex gap-5 bg-base-100">

      <section className="flex items-center justify-center content-center mx-auto py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            What Our Users Say
          </h2>

          <p className="text-center text-base-content/70 mb-12 max-w-2xl mx-auto">
            Hear from learners and professionals who have benefited from our
            platform.
          </p>

          <div className="content-center my-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="card1 bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="card-body">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="avatar">
                      <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <p className="text-sm text-base-content/60">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-base-content/80">
                    "{item.review}"
                  </p>

                  <div className="rating rating-sm mt-4">
                    <input
                      type="radio"
                      name={`rating-${item.id}`}
                      className="mask mask-star-2 bg-warning"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name={`rating-${item.id}`}
                      className="mask mask-star-2 bg-warning"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name={`rating-${item.id}`}
                      className="mask mask-star-2 bg-warning"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name={`rating-${item.id}`}
                      className="mask mask-star-2 bg-warning"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name={`rating-${item.id}`}
                      className="mask mask-star-2 bg-warning"
                      defaultChecked
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}