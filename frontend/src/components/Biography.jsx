import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>سيرة ذاتية</p>
          <h3>من نحن</h3>
          <p>
            مستشفى طنطان هو مركز طبي متخصص يقدم خدمات صحية متميزة للمجتمع منذ
            عقود. يضم فريقنا الطبي المؤهل والمختص والمتفاني الذي يعمل على تقديم
            رعاية شاملة ومتميزة لجميع المرضى. نحن ملتزمون بتوفير أعلى مستويات
            الرعاية الصحية والمعالجة المبتكرة باستخدام أحدث التقنيات الطبية.
          </p>
          <p>
            مهمتنا هي تحسين جودة حياة المرضى وتوفير بيئة آمنة ومريحة لهم
            ولذويهم. نحن نسعى جاهدين لتحقيق هذه الأهداف من خلال التميز الطبي
            والاهتمام الشخصي بكل مريض يمر بأروقة مستشفانا.
          </p>
          <p>
            نحن نعتني بكل تفاصيل تجربة المريض لضمان راحتهم وشفاءهم بأقصى سرعة
            ممكنة.
          </p>
          <p>
            تعتبر الجودة والسلامة والتفاني في الخدمة جزءًا لا يتجزأ من هويتنا
            كمؤسسة صحية.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;