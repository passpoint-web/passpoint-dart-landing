const Payment = () => {
  return (
    <div className="h-[70vh] bg-[url(/payment-link.png)] bg-cover bg-no-repeat relative tab:bg-stretch tab:h-[50vh]">
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-offset="300"
        className="w-[500px] max-w-[90%] bg-[#BFA210] rounded-3xl p-12 text-primary-2 absolute right-[10%] -bottom-[30%] tab:right-[5%] tab:-bottom-[20%] tab:p-6"
      >
        <h1 className="text-[40px] leading-[100%] font-bold font-haken mb-3 tab:text-[24px]">
          Payment Link
        </h1>
        <p className="text-[19px] font-haken opacity-90 tab:text-[14px]">
          The hassle-free way to request and receive payments. Customize, share,
          and securely process payments online with ease. Simplify your
          collections process and enhance the payment experience for your
          customers. Discover the convenience of Dart Tech's Payment Links
          today!
        </p>
      </div>
    </div>
  );
};

export default Payment;
