import Link from 'next/link';

export default function Experience2() {
  return (
    <>
      <section id="portfolio" className="section-experience pt-5">
        <div className="container">
          <div className="rounded-3 border border-1 position-relative overflow-hidden">
            <div className="box-linear-animation position-relative z-1">
              <div className="p-lg-8 p-md-6 p-3 position-relative z-1">
                <div className="d-flex align-items-center">
                  <svg
                    className="text-primary-2 me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={5}
                    height={6}
                    viewBox="0 0 5 6"
                    fill="none"
                  >
                    <circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
                  </svg>
                  <span className="text-linear-4 d-flex align-items-center">
                    {' '}
                    Experience{' '}
                  </span>
                </div>
                <h3>
                  +1
                  <span className="text-300">year of </span>
                  real-world
                  <span className="text-300">
                    <br />
                    frontend development
                  </span>
                </h3>
                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="d-flex flex-column gap-2">
                      <Link
                        href="https://spritegenix.com"
                        className="technology border border-1 rounded-3 p-3"
                        target="_blank"
                      >
                        <div className="d-flex align-items-center gap-2">
                          {/* <img
                            src="assets/imgs/home-page-2/experience/startup.svg"
                            alt="Sprite Genix"
                          /> */}
                          <div className="d-flex flex-column ms-2">
                            <h5 className="mb-1">Sprite Genix</h5>
                            <span className="text-300">Dec 2024 - Present</span>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="https://aitsun.in"
                        className="technology border border-1 rounded-3 p-3"
                        target="_blank"
                      >
                        <div className="d-flex align-items-center gap-2">
                          {/* <img
                            src="assets/imgs/home-page-2/experience/startup.svg"
                            alt="Aitsun Technologies"
                          /> */}
                          <div className="d-flex flex-column ms-2">
                            <h5 className="mb-1">Aitsun Technologies</h5>
                            <span className="text-300">
                              Jul 2024 - Nov 2024
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
                    <h6 className="text-linear-4">Front End Developer</h6>
                    <ul className="mt-4">
                      <li className="text-dark mb-3">
                        Delivered 10+ frontend applications and 1 full-stack
                        product in collaboration with UI/UX and backend teams.
                      </li>
                      <li className="text-dark mb-3">
                        Boosted SEO and organic traffic by 30% using static
                        generation and JSON-LD metadata.
                      </li>
                      <li className="text-dark mb-3">
                        Created reusable component libraries with TypeScript and
                        Tailwind CSS for consistent design and faster
                        development.
                      </li>
                    </ul>
                    <div className="d-flex flex-wrap align-items-center gap-3 mt-7">
                      <Link
                        href="#"
                        className="text-300 border border-1 px-3 py-1"
                      >
                        React.js
                      </Link>
                      <Link
                        href="#"
                        className="text-300 border border-1 px-3 py-1"
                      >
                        Next.js
                      </Link>
                      <Link
                        href="#"
                        className="text-300 border border-1 px-3 py-1"
                      >
                        TypeScript
                      </Link>
                      <Link
                        href="#"
                        className="text-300 border border-1 px-3 py-1"
                      >
                        Tailwind CSS
                      </Link>
                      <Link
                        href="#"
                        className="text-300 border border-1 px-3 py-1"
                      >
                        GraphQL
                      </Link>
                      <Link
                        href="#"
                        className="text-300 border border-1 px-3 py-1"
                      >
                        Strapi CMS
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="position-absolute top-0 start-0 z-0"
                src="assets/imgs/home-page-2/services/bg.png"
                alt="experience-bg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
