import { useState } from "react";
import { useLangStore } from "../../store/useLangStore";


const Newsletter = () => {

  const t = useLangStore((state) => state.t);

  const lang = useLangStore((state) => state.lang);
const isEnglish = lang === "en";

const [modal, setModal] = useState({
  type: null,
  data: null,
});

const [email, setEmail] = useState("");
const [subscribeMessage, setSubscribeMessage] = useState("");

  const posts = [
    {
      type: "داستان کوتاه",
      title: "سفر به درون",
      description:
        "داستانی درباره‌ی بازگشت به خود، جستجوی آرامش و معنای زندگی.",
      date: "۱۴۰۳/۰۳/۱۴",
      image:
        "https://images.pexels.com/photos/15748420/pexels-photo-15748420.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      type: "مقاله / یادداشت",
      title: "چرا هنوز قلم می‌نویسیم؟",
      description:
        "نگاهی به موانع نوشتن در دنیای دیجیتال و معنای نوشتن در عصر سرعت.",
      date: "۱۴۰۳/۰۳/۱۰",
      image:
        "https://images.pexels.com/photos/30539169/pexels-photo-30539169.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      type: "پادکست",
      title: "گفتگو با خودم",
      description:
        "گفتگویی صمیمی درباره‌ی ما و مسیر نویسندگی در دنیای امروز.",
      date: "۱۴۰۳/۰۳/۰۵",
      image:
        "https://images.pexels.com/photos/3819970/pexels-photo-3819970.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
  ];

  const archive = [
    {
      date: "۱۴۰۳/۰۲/۲۸",
      title: "خبرنامه شماره ۱۴ | کتاب‌هایی که زندگی‌ام را تغییر دادند",
    },
    {
      date: "۱۴۰۳/۰۲/۲۰",
      title: "خبرنامه شماره ۱۵ | پشت صحنه‌ی یک پروژه‌ی جدید",
    },
    {
      date: "۱۴۰۳/۰۲/۱۲",
      title: "خبرنامه شماره ۱۴ | یادداشت‌هایی درباره‌ی سفر و نوشتن",
    },
    {
      date: "۱۴۰۳/۰۲/۰۵",
      title: "خبرنامه شماره ۱۳ | معرفی کتاب‌های ماه و برنامه‌های آینده",
    },
  ];

  const handleSubscribe = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.trim()) {
    setSubscribeMessage(
      isEnglish
        ? "Please enter your email address."
        : "لطفاً ایمیل خود را وارد کنید."
    );
    return;
  }

  if (!emailRegex.test(email.trim())) {
    setSubscribeMessage(
      isEnglish
        ? "Please enter a valid email address."
        : "لطفاً یک ایمیل معتبر وارد کنید."
    );
    return;
  }
setSubscribeMessage(
  isEnglish
    ? "You have successfully subscribed!"
    : "شما با موفقیت عضو خبرنامه شدید!"
);

setEmail("");

setTimeout(() => {
  setSubscribeMessage("");
}, 3000);
};

  return (
    <main
  dir={isEnglish ? "ltr" : "rtl"}
  className="min-h-screen bg-[#fbf8f3] text-[#4a302a]"
>
     {/* ================= HERO ================= */}
<section className="w-full border-b border-[#eaded7] bg-[#fbf8f3]">

  <div
    dir="ltr"
    className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 py-8 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-12"
  >

    {/* ==================================================
        TEXT — LEFT SIDE
    ================================================== */}
   <div
  dir={isEnglish ? "ltr" : "rtl"}
  className={`order-2 flex w-full flex-col justify-center lg:order-1 ${
    isEnglish ? "text-left" : "text-right"
  }`}
>

     


      {/* Main Content */}
      <div className="relative max-w-[650px]">

       

       {/* Breadcrumb */}
<div
  dir="ltr"
  className="mb-12 flex items-center justify-start gap-3 text-sm text-[#8b7068]"
>
  <span className="text-lg">
    ⌂
  </span>

  <span>/</span>

  <span dir={isEnglish ? "ltr" : "rtl"}>
  {t.newsletter.home}
</span>

  <span>/</span>

  <span dir={isEnglish ? "ltr" : "rtl"}>
  {t.newsletter.label}
</span>
</div>


{/* Small Label */}
<div
  dir={isEnglish ? "ltr" : "rtl"}
  className="mb-5 flex items-center justify-start gap-3"
>
  <span className="text-base font-medium text-[#a56562]">
    {t.newsletter.label}
  </span>

  <span className="h-px w-8 bg-[#a56562]" />
</div>


{/* Heading */}
<h1
  dir={isEnglish ? "ltr" : "rtl"}
  className={`mb-7 text-4xl font-bold leading-[1.5] text-[#472d28] sm:text-5xl lg:text-[52px] ${
    isEnglish ? "text-left" : "text-right"
  }`}
>
  {t.newsletter.title}
</h1>

        {/* Description */}
       <p
  dir={isEnglish ? "ltr" : "rtl"}
  className={`mb-8 max-w-[620px] text-base leading-8 text-[#765f58] sm:text-lg ${
    isEnglish ? "text-left" : "text-right"
  }`}
>
  {t.newsletter.description}
</p>

        {/* Subscribe Area */}
       <div className="flex w-full flex-col gap-3 sm:flex-row-reverse">

  {/* Email */}
  <div className="flex h-14 flex-1 items-center rounded-full border border-[#dccbc3] bg-white px-5">

    <input
      type="email"
      value={email}
      onChange={(e) => {
        setEmail(e.target.value);
        setSubscribeMessage("");
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSubscribe();
        }
      }}
      dir={isEnglish ? "ltr" : "rtl"}
      placeholder={t.newsletter.emailPlaceholder}
      className={`w-full bg-transparent text-sm text-[#4a302a] outline-none placeholder:text-[#a6958e] ${
        isEnglish ? "text-left" : "text-right"
      }`}
    />

    <span className="ml-3 text-xl text-[#a56562]">
      ✉
    </span>

  </div>

  {/* Subscribe Button */}
  <button
    type="button"
    onClick={handleSubscribe}
    className="h-14 rounded-full bg-[#a56562] px-8 text-sm font-medium text-white transition duration-300 hover:bg-[#874f4d]"
  >
    <span className={isEnglish ? "mr-0 ml-2" : "mr-2"}>
      {isEnglish ? "→" : "←"}
    </span>

    {t.newsletter.subscribe}
  </button>

</div>

{/* Subscribe Message */}
{subscribeMessage && (
  <p
    dir={isEnglish ? "ltr" : "rtl"}
    className={`mt-3 text-sm font-medium ${
      isEnglish ? "text-left" : "text-right"
    } text-[#a56562]`}
  >
    {subscribeMessage}
  </p>
)}


        {/* Privacy Text */}
        <p className="mt-4 text-right text-xs text-[#9b8982]">
          {t.newsletter.privacy}
        </p>


        {/* Decorative Leaf */}
        <div className="pointer-events-none absolute -bottom-16 -left-6 hidden text-[90px] leading-none text-[#dba9a1] opacity-60 sm:block">
          ❧
        </div>

      </div>

    </div>


    {/* ==================================================
        IMAGE — RIGHT SIDE
    ================================================== */}
    <div
      dir="rtl"
      className="order-1 flex w-full justify-center lg:order-2 lg:justify-end"
    >

      <div className="relative w-full max-w-[540px]">

        {/* Square Image */}
        <div className="relative aspect-square w-full overflow-hidden  shadow-sm">

          <img
            src="https://images.pexels.com/photos/35164966/pexels-photo-35164966.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="میز نویسنده کنار پنجره"
            className="absolute inset-0 h-full w-full object-cover"
          />


          {/* Image Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />


          {/* Text On Image */}
          <div className="absolute bottom-7 right-7 text-right text-white drop-shadow-lg">

           <p>
  {isEnglish ? (
    <>
      Inside the house,
      <br />
      silence
      <br />
      puts something in me
      <br />
      to rest...
    </>
  ) : (
    <>
      داخل خانه،
      <br />
      سکوت
      <br />
      از چیزی در من
      <br />
      می‌خوابد...
    </>
  )}
</p>

            <span className="mt-2 block text-3xl">
              ♡
            </span>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

     
{/* ================= LATEST POST ================= */}
<section className="w-full bg-[#fbf8f3] px-5 py-16 sm:px-8 lg:px-12">

  <div className="mx-auto max-w-7xl">

    {/* Section Header */}
    <div
      dir={isEnglish ? "ltr" : "rtl"}
      className="mb-8 flex items-center justify-between"
    >

      {/* Title */}
      <h2
        className={`text-2xl font-bold text-[#472d28] sm:text-3xl ${
          isEnglish ? "text-left" : "text-right"
        }`}
      >
        {t.newsletter.latestPost}
      </h2>

      {/* Decorative icon */}
      <span className="text-xl text-[#a56562]">
        ✧
      </span>

    </div>


    {/* ================= FEATURED CARD ================= */}
    <div
      dir="ltr"
      className="grid overflow-hidden border border-[#eaded7] bg-white lg:grid-cols-2"
    >

      {/* ==================================================
          IMAGE — LEFT
      ================================================== */}
      <div className="order-1 h-[300px] w-full sm:h-[380px] lg:h-[520px]">

        <img
          src="https://images.pexels.com/photos/35164966/pexels-photo-35164966.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt={
            isEnglish
              ? "Window and writer's desk"
              : "پنجره و میز نویسنده"
          }
          className="h-full w-full object-cover"
        />

      </div>


      {/* ==================================================
          TEXT — RIGHT
      ================================================== */}
      <div
        dir={isEnglish ? "ltr" : "rtl"}
        className={`order-2 flex flex-col justify-center px-7 py-10 sm:px-10 lg:px-14 ${
          isEnglish ? "text-left" : "text-right"
        }`}
      >

        {/* Category */}
        <div
          dir={isEnglish ? "ltr" : "rtl"}
          className="mb-5 flex justify-start"
        >
          <span className="inline-flex rounded-full border border-[#ead4ce] bg-[#f8eeeb] px-4 py-1.5 text-xs font-medium text-[#a56562]">
            {t.newsletter.category}
          </span>
        </div>


        {/* Title */}
        <h3
          dir={isEnglish ? "ltr" : "rtl"}
          className={`mb-5 text-2xl font-bold leading-[1.7] text-[#472d28] sm:text-3xl ${
            isEnglish ? "text-left" : "text-right"
          }`}
        >
          {t.newsletter.featuredTitle}
        </h3>


        {/* Meta */}
        <div
          dir={isEnglish ? "ltr" : "rtl"}
          className={`mb-6 flex items-center gap-5 text-xs text-[#9b8982] ${
            isEnglish ? "justify-start" : "justify-end"
          }`}
        >

          <span>
            {isEnglish ? "2024/06/17" : "۱۴۰۳/۰۳/۲۸"}
          </span>

          <span>
            ◷ {isEnglish ? "5 min" : "۵ دقیقه"}
          </span>

          <span>
            ◉ 2.9k
          </span>

        </div>


        {/* Description */}
        <p
          dir={isEnglish ? "ltr" : "rtl"}
          className={`mb-8 max-w-xl text-sm leading-8 text-[#765f58] sm:text-base ${
            isEnglish ? "text-left" : "text-right"
          }`}
        >
          {t.newsletter.featuredDescription}
        </p>


        {/* Button */}
        <div
          dir={isEnglish ? "ltr" : "rtl"}
          className="flex justify-start"
        >

          <button
            type="button"
            dir={isEnglish ? "ltr" : "rtl"}
            onClick={() =>
              setModal({
                type: "post",
                data: {
                  type: isEnglish
                    ? "Short Story"
                    : "داستان کوتاه",

                  title: isEnglish
                    ? "The Window That Opens to Summer"
                    : "پنجره‌ای که به تابستان باز می‌شود",

                  description: isEnglish
                    ? "Sometimes the place of certain seasons does not simply change; it becomes a place without anxiety, a place of comfort, a place where a window remains open."
                    : "گاهی جای بعضی فصل‌ها فقط عوض نمی‌شود؛ آنجا جایی است بدون اضطراب، جایی برای آرامش و باز بودن یک پنجره.",

                  date: isEnglish
                    ? "2024/06/17"
                    : "۱۴۰۳/۰۳/۲۸",

                  image:
                    "https://images.pexels.com/photos/35164966/pexels-photo-35164966.jpeg?auto=compress&cs=tinysrgb&w=1200",
                },
              })
            }
            className="rounded-full bg-[#a56562] px-7 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#874f4d]"
          >
            {t.newsletter.readMore}

            <span className={isEnglish ? "ml-2" : "mr-2"}>
              {isEnglish ? "→" : "←"}
            </span>

          </button>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= LATEST UPDATES ================= */}
<section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">

  {/* Section Title */}
  <div
    dir={isEnglish ? "ltr" : "rtl"}
    className="mb-7 flex items-center justify-between"
  >
    <h2
      className={`text-2xl font-bold text-[#4b302b] sm:text-3xl ${
        isEnglish ? "text-left" : "text-right"
      }`}
    >
      {t.newsletter.latestUpdates}
    </h2>

    <span className="text-[#a56562]">
      —
    </span>
  </div>


  {/* Cards */}
  <div className="grid gap-5 md:grid-cols-3">

    {posts.map((post, index) => {

      const englishPost = [
        {
          type: "Short Story",
          title: "Journey Within",
          description:
            "A story about returning to oneself, searching for peace, and finding meaning in life.",
          date: "2024/06/03",
        },
        {
          type: "Article / Note",
          title: "Why Do We Still Write?",
          description:
            "A look at the challenges of writing in the digital world and the meaning of writing in an age of speed.",
          date: "2024/05/30",
        },
        {
          type: "Podcast",
          title: "A Conversation With Myself",
          description:
            "An intimate conversation about us and the journey of writing in today's world.",
          date: "2024/05/25",
        },
      ][index];

      const currentPost = isEnglish ? englishPost : post;

      return (
       <article
  key={index}
  dir={isEnglish ? "ltr" : "rtl"}
  className="flex h-full flex-col overflow-hidden rounded-xl border border-[#e5d8d0] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
>

  {/* ================= IMAGE ================= */}

  <div className="overflow-hidden">

    {/* Category — ABOVE IMAGE */}
    <div
      dir={isEnglish ? "ltr" : "rtl"}
      className={`flex px-4 pt-4 pb-3 ${
        isEnglish ? "justify-start" : "justify-end"
      }`}
    >
      <span
        className="rounded-full bg-[#f7e9e1] px-4 py-2 text-xs font-medium text-[#805850]"
      >
        {currentPost.type}
      </span>
    </div>


    {/* Image */}
    <div className="relative h-52 overflow-hidden">

      <img
        src={post.image}
        alt={currentPost.title}
        className="h-full w-full object-cover transition duration-500 hover:scale-105"
      />


      {/* Play Button */}
      {index === 2 && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-black/20 text-xl text-white backdrop-blur-sm">
            ▶️
          </span>
        </div>
      )}

    </div>

  </div>


  {/* ================= CARD CONTENT ================= */}

  <div className="flex flex-1 flex-col p-5">

    {/* Title */}
    <h3
      className={`mb-3 text-xl font-bold leading-8 text-[#4a302a] ${
        isEnglish ? "text-left" : "text-right"
      }`}
    >
      {currentPost.title}
    </h3>


    {/* Description */}
    <p
      className={`mb-5 min-h-[60px] text-sm leading-7 text-[#806d65] ${
        isEnglish ? "text-left" : "text-right"
      }`}
    >
      {currentPost.description}
    </p>


    {/* ================= BOTTOM ================= */}

    <div
      dir="ltr"
      className="mt-auto flex items-center justify-between border-t border-[#eee4de] pt-4"
    >

      {/* DATE — LEFT */}
      <span
        className={`text-xs text-[#9b8982] ${
          isEnglish ? "text-left" : "text-right"
        }`}
      >
        ▣ {currentPost.date}
      </span>


      {/* BUTTON — RIGHT */}
      <button
        type="button"
        dir={isEnglish ? "ltr" : "rtl"}
        onClick={() =>
          setModal({
            type: "post",
            data: isEnglish
              ? {
                  type: englishPost.type,
                  title: englishPost.title,
                  description: englishPost.description,
                  date: englishPost.date,
                  image: post.image,
                }
              : post,
          })
        }
        className="rounded-full border border-[#c9958d] px-4 py-2 text-xs text-[#9a625d] transition hover:bg-[#a56562] hover:text-white"
      >
        {t.newsletter.readArticle}

        <span className={isEnglish ? "ml-2" : "mr-2"}>
          {isEnglish ? "→" : "←"}
        </span>

      </button>

    </div>

  </div>

</article>
      );
    })}

  </div>

</section>

     {/* ================= ARCHIVE ================= */}
<section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">

  {/* Title */}
  <div
    dir={isEnglish ? "ltr" : "rtl"}
    className="mb-7 flex items-center justify-between"
  >

    <h2
      className={`text-2xl font-bold text-[#4b302b] sm:text-3xl ${
        isEnglish ? "text-left" : "text-right"
      }`}
    >
      <span className="mr-2 text-[#a56562]">
        ▧
      </span>

      {t.newsletter.archive}
    </h2>

  </div>


  {/* Archive Card */}
  <div
    dir="ltr"
    className="grid overflow-hidden rounded-xl border border-[#e5d8d0] bg-white lg:grid-cols-[1fr_320px]"
  >

    {/* ================= LEFT — ARCHIVE LIST ================= */}
    <div dir="ltr">

      {(isEnglish
        ? [
            {
              date: "2024/05/18",
              title:
                "Newsletter No. 16 | Books That Changed My Life",
            },
            {
              date: "2024/05/10",
              title:
                "Newsletter No. 15 | Behind the Scenes of a New Project",
            },
            {
              date: "2024/05/02",
              title:
                "Newsletter No. 14 | Notes on Travel and Writing",
            },
            {
              date: "2024/04/25",
              title:
                "Newsletter No. 13 | Books of the Month and Future Plans",
            },
          ]
        : archive
      ).map((item, index) => (

        <button
          key={index}
          type="button"
          onClick={() =>
            setModal({
              type: "archive",
              data: item,
            })
          }
          className="grid w-full grid-cols-[55px_minmax(0,1fr)_120px_25px] items-center border-b border-[#eee4de] px-5 py-6 transition last:border-b-0 hover:bg-[#fcf7f3] sm:px-7"
        >

          {/* EMAIL — FAR LEFT */}
          <span className="flex justify-start text-xl text-[#a56562]">
            ✉
          </span>


          {/* TITLE — MIDDLE */}
          <span
            dir={isEnglish ? "ltr" : "rtl"}
            className={`px-4 text-sm text-[#59443e] sm:text-base ${
              isEnglish ? "text-left" : "text-right"
            }`}
          >
            {item.title}
          </span>


          {/* DATE */}
          <span
            dir="ltr"
            className="text-right text-xs text-[#9a8880]"
          >
            {item.date}
          </span>


          {/* ARROW */}
          <span
            className={`text-[#a56562] ${
              isEnglish ? "text-right" : "text-left"
            }`}
          >
            →
          </span>

        </button>

      ))}

    </div>


    {/* ================= RIGHT — ARCHIVE PROMO ================= */}
    <div
      dir={isEnglish ? "ltr" : "rtl"}
      className="flex min-h-[330px] flex-col items-center justify-center bg-[#f8ebe4] p-8 text-center"
    >

      {/* Icon */}
      <div className="mb-5 text-5xl text-[#c98e86]">
        ✉
      </div>


      {/* Title */}
      <h3 className="mb-4 text-xl font-bold leading-8 text-[#573a34]">

        {t.newsletter.archivePromoTitle}

        <br />

        {t.newsletter.archivePromoTitle2}

      </h3>


      {/* Description */}
      <p className="mb-5 max-w-xs text-sm leading-7 text-[#80665e]">
        {t.newsletter.archivePromoDescription}
      </p>


      {/* Decorative Heart */}
      <span className="text-2xl text-[#a56562]">
        ♡
      </span>

    </div>

  </div>

</section>


     {/* ================= CTA ================= */}
<section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">

  <div
    dir={isEnglish ? "ltr" : "rtl"}
    className="relative overflow-hidden rounded-xl border border-[#d9aaa1] bg-[#f9eee8] px-6 py-9 sm:px-12"
  >

    {/* Decorative Leaf */}
    <div
      className={`absolute top-2 text-6xl text-[#d49b91] opacity-60 ${
        isEnglish ? "left-5" : "right-5"
      }`}
    >
      ❧
    </div>


    {/* Content */}
    <div
      className={`relative flex flex-col items-center gap-6 text-center md:flex-row ${
        isEnglish
          ? "md:text-left"
          : "md:text-right"
      }`}
    >

      {/* Button */}
      <button
        type="button"
        className="whitespace-nowrap rounded-full bg-[#a56562] px-8 py-3 text-sm text-white transition hover:bg-[#874f4d]"
      >
        {isEnglish ? "Subscribe to Newsletter" : "عضویت در خبرنامه"}

        <span className={isEnglish ? "ml-2" : "mr-2"}>
          {isEnglish ? "→" : "←"}
        </span>
      </button>


      {/* Text */}
      <div>

        <h2 className="mb-3 text-2xl font-bold text-[#51352f]">
          {t.newsletter.ctaTitle}
        </h2>

        <p className="text-sm leading-7 text-[#80665e]">
          {t.newsletter.ctaDescription}
        </p>

      </div>

    </div>

  </div>

</section>


{/* ================= AUDIO PLAYER / FOOTER ================= */}
<section
  dir="ltr"
  className="sticky bottom-0 z-50 border-t border-[#9a6763] bg-[#a86c68] px-2 py-2 text-white shadow-2xl sm:px-4 sm:py-3"
>
  <div className="mx-auto flex max-w-7xl items-center gap-1 sm:gap-4 lg:gap-6">

    {/* ================= START — IMAGE + TEXT ================= */}
    <div
      dir={isEnglish ? "ltr" : "rtl"}
      className="flex w-[105px] shrink-0 items-center justify-start gap-1 sm:w-[180px] sm:gap-2 md:w-[230px] lg:w-[280px] lg:gap-3"
    >
      {/* Text */}
      <div
        dir={isEnglish ? "ltr" : "rtl"}
        className={`min-w-0 flex-1 ${
          isEnglish ? "text-left" : "text-right"
        }`}
      >
        <p className="truncate text-[8px] font-medium sm:text-[10px] md:text-xs lg:text-sm">
          {isEnglish
            ? "The Window That Opens to Summer"
            : "پنجره‌ای که به تابستان باز می‌شود"}
        </p>

        <p className="mt-0.5 truncate text-[7px] text-white/70 sm:text-[8px] md:text-[10px] lg:text-xs">
          {t.newsletter.audioSeason}
          {" · "}
          {isEnglish ? "Maryam Amiri" : "مریم امیری"}
        </p>
      </div>

      {/* Image */}
      <div className="h-8 w-8 shrink-0 overflow-hidden rounded-md sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 lg:rounded-lg">
        <img
          src="https://images.pexels.com/photos/15748420/pexels-photo-15748420.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt={isEnglish ? "Podcast" : "پادکست"}
          className="h-full w-full object-cover"
        />
      </div>
    </div>

    {/* ================= CENTER — AUDIO PLAYER ================= */}
    <div className="flex min-w-0 flex-1 flex-col items-center">

      {/* Controls */}
      <div className="mb-1 flex items-center gap-2 sm:mb-2 sm:gap-4 md:gap-6">

        {/* Previous */}
        <button
          type="button"
          className="text-sm transition hover:scale-110 sm:text-base md:text-lg"
          aria-label="Previous"
        >
          ↶
        </button>

        {/* Play / Pause */}
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#9c6461] shadow-lg sm:h-10 sm:w-10 md:h-11 md:w-11"
          aria-label="Play / Pause"
        >
          ❚❚
        </button>

        {/* Next */}
        <button
          type="button"
          className="text-sm transition hover:scale-110 sm:text-base md:text-lg"
          aria-label="Next"
        >
          ↷
        </button>

      </div>

      {/* Progress */}
      <div
        dir="ltr"
        className="flex w-full max-w-md items-center gap-1 text-[7px] text-white/70 sm:gap-2 sm:text-[9px] md:gap-3 md:text-[10px]"
      >
        <span>12:18</span>

        <div className="relative h-1 flex-1 rounded-full bg-white/30">
          <div className="absolute left-0 top-0 h-full w-[35%] rounded-full bg-white" />

          <div className="absolute left-[35%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-white sm:h-3 sm:w-3" />
        </div>

        <span>04:32</span>
      </div>
    </div>

    {/* ================= END — AUDIO CONTROLS ================= */}
    <div className="flex w-[55px] shrink-0 items-center justify-end gap-2 sm:w-[100px] sm:gap-3 md:w-[150px] lg:w-[220px] lg:gap-5">

      {/* Volume */}
      <span className="text-xs sm:text-sm md:text-base">
        🔊
      </span>

      {/* Volume Progress */}
      <div className="hidden h-1 w-12 rounded-full bg-white/30 sm:block md:w-16 lg:w-20">
        <div className="h-full w-[65%] rounded-full bg-white" />
      </div>

      {/* Menu */}
      <button
        type="button"
        className="text-base transition hover:scale-110 sm:text-lg md:text-xl"
        aria-label="Menu"
      >
        ☰
      </button>

    </div>

  </div>
</section>
{/* ================= MODAL ================= */}
{modal.type && modal.data && (
  <div
    dir="ltr"
    className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-black/80 via-black/70 to-[#472d28]/80 p-4 backdrop-blur-sm sm:p-6"
    onClick={() => setModal({ type: null, data: null })}
  >

    {/* MODAL CONTENT */}
    <div
      dir={isEnglish ? "ltr" : "rtl"}
      className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-[#fbf8f3] shadow-2xl"
      onClick={(event) => event.stopPropagation()}
    >

      {/* ================= CLOSE BUTTON ================= */}
      <button
        type="button"
        onClick={() => setModal({ type: null, data: null })}
        aria-label={t.newsletter.close}
        className={`fixed top-4 z-[110] flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-2xl text-[#472d28] shadow-md transition hover:bg-[#a56562] hover:text-white ${
          isEnglish ? "right-4" : "left-4"
        }`}
      >
        ×
      </button>


      {/* ================= POST MODAL ================= */}
      {modal.type === "post" && (
        <div>

          {/* Image */}
          <div className="h-56 w-full overflow-hidden sm:h-72 lg:h-[420px]">
            <img
              src={modal.data.image}
              alt={modal.data.title}
              className="h-full w-full object-cover"
            />
          </div>


          {/* Content */}
          <div className="px-6 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-12">

            {/* Category */}
            <span className="inline-flex rounded-full bg-[#f7e9e1] px-4 py-2 text-xs font-medium text-[#805850]">
              {modal.data.type}
            </span>


            {/* Title */}
            <h2
              dir={isEnglish ? "ltr" : "rtl"}
              className={`mt-5 text-2xl font-bold leading-[1.7] text-[#472d28] sm:text-3xl lg:text-4xl ${
                isEnglish ? "text-left" : "text-right"
              }`}
            >
              {modal.data.title}
            </h2>


            {/* Meta */}
            <div
              dir={isEnglish ? "ltr" : "rtl"}
              className={`mt-4 flex flex-wrap items-center gap-5 text-xs text-[#9b8982] ${
                isEnglish ? "justify-start" : "justify-start"
              }`}
            >

              <span>
                {modal.data.date}
              </span>

              <span>
                ◷ {isEnglish ? "5 min" : "۵ دقیقه"}
              </span>

              <span>
                ◉ {isEnglish ? "2.9k" : "۲.۹k"}
              </span>

            </div>


            {/* Article */}
            <div
              dir={isEnglish ? "ltr" : "rtl"}
              className={`mt-8 max-w-4xl text-sm leading-9 text-[#765f58] sm:text-base ${
                isEnglish ? "text-left" : "text-right"
              }`}
            >

              {/* Main Description */}
              <p>
                {modal.data.description}
              </p>


              {/* Paragraph 2 */}
              <p className="mt-6">
                {isEnglish
                  ? "This is where the full article can be placed. This section is designed to allow readers to continue reading the complete piece without leaving the page."
                  : "اینجا می‌توان متن کامل مقاله را قرار داد. این بخش برای نمایش ادامه‌ی مقاله طراحی شده است تا کاربر بتواند بدون ترک صفحه، محتوای کامل نوشته را مطالعه کند."
                }
              </p>


              {/* Paragraph 3 */}
              <p className="mt-6">
                {isEnglish
                  ? "The writing can include several paragraphs, with appropriate spacing and readability throughout this section."
                  : "نوشته می‌تواند شامل چندین پاراگراف باشد و در این قسمت با فاصله و خوانایی مناسب نمایش داده می‌شود."
                }
              </p>

            </div>

          </div>

        </div>
      )}


      {/* ================= ARCHIVE MODAL ================= */}
      {modal.type === "archive" && (
        <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-14">

          {/* Icon */}
          <div className="mb-6 text-4xl text-[#a56562]">
            ✉
          </div>


          {/* Date */}
          <span className="text-xs text-[#9a8880]">
            {modal.data.date}
          </span>


          {/* Title */}
          <h2
            dir={isEnglish ? "ltr" : "rtl"}
            className={`mt-4 text-2xl font-bold leading-[1.7] text-[#472d28] sm:text-3xl ${
              isEnglish ? "text-left" : "text-right"
            }`}
          >
            {modal.data.title}
          </h2>


          {/* Newsletter Content */}
          <div
            dir={isEnglish ? "ltr" : "rtl"}
            className={`mt-8 max-w-4xl text-sm leading-9 text-[#765f58] sm:text-base ${
              isEnglish ? "text-left" : "text-right"
            }`}
          >

            {/* Paragraph 1 */}
            <p>
              {isEnglish
                ? "This is where the full newsletter content can be placed. Readers can explore the complete content of this newsletter issue directly in this window."
                : "اینجا متن کامل خبرنامه قرار می‌گیرد. کاربر می‌تواند محتوای کامل این شماره از خبرنامه را در همین پنجره مطالعه کند."
              }
            </p>


            {/* Paragraph 2 */}
            <p className="mt-6">
              {isEnglish
                ? "The newsletter can include writings, news, book recommendations, new projects, and other content prepared for readers."
                : "خبرنامه می‌تواند شامل نوشته‌ها، اخبار، معرفی کتاب، پروژه‌های جدید و مطالب دیگری باشد که برای خوانندگان آماده شده است."
              }
            </p>


            {/* Paragraph 3 */}
            <p className="mt-6">
              {isEnglish
                ? "Additional newsletter content can also be placed in this section."
                : "ادامه‌ی محتوای خبرنامه نیز می‌تواند در این قسمت قرار بگیرد."
              }
            </p>

          </div>

        </div>
      )}

    </div>
  </div>
)}
    </main>
  );
};

export default Newsletter;
