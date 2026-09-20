const Newsletter = () => {
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

  return (
    <main
      dir="rtl"
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
      dir="rtl"
      className="order-2 flex w-full flex-col justify-center lg:order-1"
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

  <span dir="rtl">
    خانه
  </span>

  <span>/</span>

  <span dir="rtl">
    خبرنامه
  </span>
</div>


{/* Small Label */}
<div
  dir="rtl"
  className="mb-5 flex items-center justify-start gap-3"
>
  <span className="text-base font-medium text-[#a56562]">
    خبرنامه
  </span>

  <span className="h-px w-8 bg-[#a56562]" />
</div>


{/* Heading */}
<h1 className="mb-7 text-right text-4xl font-bold leading-[1.5] text-[#472d28] sm:text-5xl lg:text-[52px]">
  کلمات مریم،
  <br />
  مستقیماً در صندوق ورودی شما
</h1>

        {/* Description */}
        <p className="mb-8 max-w-[620px] text-right text-base leading-8 text-[#765f58] sm:text-lg">
          با عضویت در خبرنامه، هر هفته تازه‌ترین نوشته‌های کوتاه،
          مقالات منتخب، پادکست‌ها و پشت‌صحنه‌ی فعالیت‌هایم را
          دریافت کنید.
        </p>


        {/* Subscribe Area */}
        <div className="flex w-full flex-col gap-3 sm:flex-row-reverse">

          {/* Subscribe Button */}

           {/* Email */}
          <div className="flex h-14 flex-1 items-center rounded-full border border-[#dccbc3] bg-white px-5">

           

            <input
              type="email"
              dir="rtl"
              placeholder="ایمیل خود را وارد کنید..."
              className="w-full bg-transparent text-right text-sm text-[#4a302a] outline-none placeholder:text-[#a6958e]"
            />

             <span className="ml-3 text-xl text-[#a56562]">
              ✉
            </span>

          </div>
          <button
            type="button"
            className="h-14 rounded-full bg-[#a56562] px-8 text-sm font-medium text-white transition duration-300 hover:bg-[#874f4d]"
          >
            <span className="mr-2">←</span>
            
            عضویت در خبرنامه
            
          </button>


         

        </div>


        {/* Privacy Text */}
        <p className="mt-4 text-right text-xs text-[#9b8982]">
          آدرس شما فقط برای ارسال خبرنامه استفاده می‌شود.
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

            <p className="text-base font-medium leading-8">
              داستان‌ها
              <br />
              همیشه
              <br />
              از جایی شروع
              <br />
              می‌شوند...
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
      dir="rtl"
      className="mb-8 flex items-center justify-between"
    >

      {/* Title */}
      <h2 className="text-2xl font-bold text-[#472d28] sm:text-3xl">
        جدیدترین ارسال
      </h2>

      {/* Decorative icon */}
      <span className="text-xl text-[#a56562]">
        ✧
      </span>

    </div>


    {/* ================= FEATURED CARD ================= */}
    <div
      dir="ltr"
      className="grid overflow-hidden  border border-[#eaded7] bg-white lg:grid-cols-2"
    >

      {/* ==================================================
          IMAGE — LEFT
      ================================================== */}
      <div className="order-1 h-[300px] w-full sm:h-[380px] lg:h-[520px]">

        <img
          src="https://images.pexels.com/photos/35164966/pexels-photo-35164966.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="پنجره و میز نویسنده"
          className="h-full w-full object-cover"
        />

      </div>


      {/* ==================================================
          TEXT — RIGHT
      ================================================== */}
      <div
        dir="rtl"
        className="order-2 flex flex-col justify-center px-7 py-10 text-right sm:px-10 lg:px-14"
      >

        {/* Category */}
        <div
  dir="ltr"
  className="mb-5 flex justify-start"
>
  <span className="inline-flex rounded-full border border-[#ead4ce] bg-[#f8eeeb] px-4 py-1.5 text-xs font-medium text-[#a56562]">
    داستان کوتاه
  </span>
</div>


        {/* Title */}
        <h3 
         dir="rtl"
        className="mb-5 text-left text-2xl font-bold leading-[1.7] text-[#472d28] sm:text-3xl">
          پنجره‌ای که به تابستان باز می‌شود
        </h3>


        {/* Meta */}
        <div className="mb-6 flex items-center justify-end gap-5 text-xs text-[#9b8982]">

          <span>
            ۱۴۰۳/۰۳/۲۸
          </span>

          <span>
            ◷ ۵ دقیقه
          </span>

          <span>
            ◉ ۲.۹k
          </span>

        </div>


        {/* Description */}
        <p
  dir="rtl"
  className="mb-8 max-w-xl text-left text-sm leading-8 text-[#765f58] sm:text-base"
>
  گاهی جای بعضی فصل‌ها فقط عوض نمی‌شود؛ آنجا جایی است بدون اضطراب،
  به ملالت است، به باز بودن یک پنجره.
</p>


        {/* Button */}
        <div
  dir="ltr"
  className="flex justify-start"
>
  <button
    type="button"
    dir="rtl"
    className="rounded-full bg-[#a56562] px-7 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#874f4d]"
  >
    مطالعه کامل
    <span className="mr-2">
      ←
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
  <div className="mb-7 flex items-center justify-between">
    <h2
      dir="rtl"
      className="text-2xl font-bold text-[#4b302b] sm:text-3xl"
    >
      آخرین به‌روزرسانی‌ها
    </h2>

    <span className="text-[#a56562]">
      —
    </span>
  </div>


  {/* Cards */}
  <div className="grid gap-5 md:grid-cols-3">

    {posts.map((post, index) => (
      <article
        key={index}
        dir="rtl"
        className="overflow-hidden rounded-xl border border-[#e5d8d0] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
      >

        
   {/* ================= IMAGE ================= */}

<div className="overflow-hidden">

  {/* Category — ABOVE IMAGE */}
  <div className="flex justify-end px-4 pt-4 pb-3">
    <span
      dir="rtl"
      className="rounded-full bg-[#f7e9e1] px-4 py-2 text-xs font-medium text-[#805850]"
    >
      {post.type}
    </span>
  </div>

  {/* Image */}
  <div className="relative h-52 overflow-hidden">
    <img
      src={post.image}
      alt={post.title}
      className="h-full w-full object-cover transition duration-500 hover:scale-105"
    />

    {/* Play Button */}
    {index === 2 && (
      <div className="absolute inset-0 flex items-center justify-center bg-black/10">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-black/20 text-xl text-white backdrop-blur-sm">
          ▶
        </span>
      </div>
    )}
  </div>

</div>

        {/* ================= CARD CONTENT ================= */}
        <div className="p-5">

          {/* Title */}
          <h3
            className="mb-3 text-right text-xl font-bold leading-8 text-[#4a302a]"
          >
            {post.title}
          </h3>


          {/* Description */}
          <p
            className="mb-5 min-h-[60px] text-right text-sm leading-7 text-[#806d65]"
          >
            {post.description}
          </p>


          {/* ================= BOTTOM ================= */}
          <div
            dir="ltr"
            className="flex items-center justify-between border-t border-[#eee4de] pt-4"
          >

            {/* DATE — LEFT */}
            <span
              dir="rtl"
              className="text-xs text-[#9b8982]"
            >
              ▣ {post.date}
            </span>


            {/* BUTTON — RIGHT */}
            <button
              dir="rtl"
              className="rounded-full border border-[#c9958d] px-4 py-2 text-xs text-[#9a625d] transition hover:bg-[#a56562] hover:text-white"
            >
              مطالعه مقاله ←
            </button>

          </div>

        </div>

      </article>
    ))}

  </div>

</section>

      {/* ================= ARCHIVE ================= */}
<section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">

  {/* Title */}
  <div
    dir="rtl"
    className="mb-7 flex items-center justify-start gap-3"
  >
    <h2 className="text-2xl font-bold text-[#4b302b] sm:text-3xl">
      <span className="text-[#a56562]">▧</span>
      آرشیو خبرنامه‌های قبلی
    </h2>

    
  </div>

  {/* Archive Card */}
  <div
    dir="ltr"
    className="grid overflow-hidden rounded-xl border border-[#e5d8d0] bg-white lg:grid-cols-[1fr_320px]"
  >

    {/* ================= LEFT — ARCHIVE LIST ================= */}
    <div dir="ltr">

      {archive.map((item, index) => (
        <button
          key={index}
          className="grid w-full grid-cols-[55px_minmax(0,1fr)_120px_25px] items-center border-b border-[#eee4de] px-5 py-6 transition last:border-b-0 hover:bg-[#fcf7f3] sm:px-7"
        >

          {/* EMAIL — FAR LEFT */}
          <span className="flex justify-start text-xl text-[#a56562]">
            ✉
          </span>

          {/* TITLE — MIDDLE */}
          <span
            dir="rtl"
            className="px-4 text-right text-sm text-[#59443e] sm:text-base"
          >
            {item.title}
          </span>

          {/* DATE */}
          <span
            dir="rtl"
            className="text-right text-xs text-[#9a8880]"
          >
            {item.date}
          </span>

          {/* ARROW */}
          <span className="text-[#a56562]">
            ›
          </span>

        </button>
      ))}

    </div>


    {/* ================= RIGHT — ARCHIVE PROMO ================= */}
    <div
      dir="rtl"
      className="flex min-h-[330px] flex-col items-center justify-center bg-[#f8ebe4] p-8 text-center"
    >

      <div className="mb-5 text-5xl text-[#c98e86]">
        ✉
      </div>

      <h3 className="mb-4 text-xl font-bold leading-8 text-[#573a34]">
        اگر می‌خواهید
        <br />
        قبل از همه
      </h3>

      <p className="mb-5 max-w-xs text-sm leading-7 text-[#80665e]">
        از نوشته‌ها و اخبار جدید باخبر شوید،
        به ما بپیوندید...
      </p>

      <span className="text-2xl text-[#a56562]">
        ♡
      </span>

    </div>

  </div>
</section>


      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        

        <div className="relative overflow-hidden rounded-xl border border-[#d9aaa1] bg-[#f9eee8] px-6 py-9 sm:px-12">

         


          <div className="absolute left-5 top-2 text-6xl text-[#d49b91] opacity-60">
            ❧
          </div>

          <div className="relative flex flex-col items-center  gap-6 text-center md:flex-row md:text-right">

             <button 
             className="whitespace-nowrap rounded-full bg-[#a56562] px-8 py-3 text-sm text-white transition hover:bg-[#874f4d]">
             ← عضویت در خبرنامه 
            </button>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-[#51352f]">
                به دنیای بیشتر کلمات و صداها بپیوندید...
              </h2>

              <p className="text-sm leading-7 text-[#80665e]">
                برای دسترسی به نوشته‌های بیشتر، پادکست‌های اختصاصی
                و خبرهای تازه در خبرنامه عضو شوید.
              </p>
            </div>

            
          </div>

        </div>
      </section>

{/* ================= AUDIO PLAYER / FOOTER ================= */}
<section
  dir="ltr"
  className="sticky bottom-0 z-50 border-t border-[#9a6763] bg-[#a86c68] px-4 py-3 text-white shadow-2xl"
>
  <div className="mx-auto flex max-w-7xl items-center gap-6">

    {/* ================= START — IMAGE + TEXT ================= */}
    <div
      dir="rtl"
      className="hidden w-[280px] shrink-0 items-center justify-start gap-3 sm:flex"
    >

       {/* Text */}
      <div
        dir="rtl"
       className="min-w-0 text-end">
        <p className="truncate text-sm font-medium">
          پنجره‌ای که به تابستان باز می‌شود
        </p>

        <p className="mt-1 text-xs text-white/70">
          فصل اول · مریم امیری
        </p>
      </div>

      {/* Image */}
      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg">
        <img
          src="https://images.pexels.com/photos/15748420/pexels-photo-15748420.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt="پادکست"
          className="h-full w-full object-cover"
        />
      </div>

     

    </div>


    {/* ================= CENTER — AUDIO PLAYER ================= */}
    <div className="flex min-w-0 flex-1 flex-col items-center">

      {/* Controls */}
      <div className="mb-2 flex items-center gap-6">

        <button className="text-lg transition hover:scale-110">
          ↶
        </button>

        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#9c6461] shadow-lg">
          ❚❚
        </button>

        <button className="text-lg transition hover:scale-110">
          ↷
        </button>

      </div>

      {/* Progress */}
      <div
        dir="ltr"
        className="flex w-full max-w-md items-center gap-3 text-[10px] text-white/70"
      >

        <span>12:18</span>

        <div className="relative h-1 flex-1 rounded-full bg-white/30">

          <div className="absolute left-0 top-0 h-full w-[35%] rounded-full bg-white" />

          <div className="absolute left-[35%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white" />

        </div>

        <span>04:32</span>

      </div>

    </div>


    {/* ================= END — AUDIO CONTROLS ================= */}
    <div className="flex w-[220px] shrink-0 items-center justify-end gap-5">

      {/* Volume */}
      <div className="flex items-center gap-3">

        

        <span className="text-base">
          🔊
        </span>

      </div>
      <div className="h-1 w-20 rounded-full bg-white/30">
          <div className="h-full w-[65%] rounded-full bg-white" />
        </div>

      {/* Menu */}
      <button className="text-xl transition hover:scale-110">
        ☰
      </button>

    </div>

  </div>
</section>
    </main>
  );
};

export default Newsletter;