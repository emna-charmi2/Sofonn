const DeviceCard = ({
  imgSrc,
  imgAlt,
  label,
  className,
}: {
  imgSrc: string;
  imgAlt: string;
  label: string;
  className?: string;
}) => (
  <div
    className={`ds-glass rounded-xl flex flex-col items-center w-[220px] ${className ?? ""}`}
  >
    <img
      src={imgSrc}
      alt={imgAlt}
      className="w-full h-[120px] object-cover rounded mb-5"
    />
    <div className="font-bold text-sm flex items-center gap-2 ds-text-primary">
      {label}
    </div>
  </div>
);

export default function Ecosystem() {
  return (
    <div className="mx-auto px-4 lg:px-8 py-8 space-y-8 ds-page flex flex-col items-center font-sans">
      {/* Header */}
      <div className="text-center max-w-2xl mb-8 ds-text-primary">
        <h1 className="mb-2">
          NAVTOR&apos;s integrated digital ecosystem
          <br />
          unlocks the powerful benefits of digitalisation
        </h1>
        <p>
          Our SUITE of products and services is a unique ecosystem with total
          integration. Through the development of innovative e-Navigation,
          Digital Logbooks and Performance Solutions, we make vessel operations,
          fleets and entire businesses safer, simpler and more efficient.
        </p>
      </div>

      {/* Main Diagram */}
      <div className="w-full max-w-[1200px] flex justify-between relative">
        {/* Left Column */}
        <div className="flex flex-col gap-8 items-center w-[250px]">
          <DeviceCard
            imgSrc="https://storage.googleapis.com/banani-generated-images/generated-images/d39c2f09-1f81-45d4-b925-3453d02f4abc.jpg"
            imgAlt="Marine IA"
            label="Marine IA"
          />
          <DeviceCard
            imgSrc="https://storage.googleapis.com/banani-generated-images/generated-images/9789a323-d5f0-4e5f-81ff-33fe5fa73680.jpg"
            imgAlt="Marine IQ"
            label="Marine IQ"
          />
          <DeviceCard
            imgSrc="https://storage.googleapis.com/banani-generated-images/generated-images/e12531ca-0bdf-4c00-b6cd-77353f28fc1e.jpg"
            imgAlt="Marine LOG"
            label="Marine LOG"
          />
          <DeviceCard
            imgSrc="https://storage.googleapis.com/banani-generated-images/generated-images/e12531ca-0bdf-4c00-b6cd-77353f28fc1e.jpg"
            imgAlt="Marine ECO"
            label="Marine ECO"
          />
        </div>

        {/* Center Column */}
        <div className="flex-1 flex flex-col items-center px-10 gap-0">
          {/* SofonnCloud at the top */}
          <div className="flex items-center gap-10 mb-0">
            <div className="ds-glass rounded-[50px] px-10 py-5 flex flex-col items-center border-2 border-[var(--border-card)]">
              <img
                src="https://storage.googleapis.com/banani-generated-images/generated-images/a4d6fc81-fcd1-4984-a4f3-796aeba9e542.jpg"
                alt="SofonnCloud"
                className="w-16 h-20 object-contain mb-2.5"
              />
              <div className="font-bold text-sm flex items-center gap-2 ds-text-primary">
                SofonnCloud
              </div>
            </div>
          </div>

          <div className="h-[120px]" />

          {/* VDR + Dashboard */}
          <div className="flex gap-8">
            <DeviceCard
              imgSrc="https://storage.googleapis.com/banani-generated-images/generated-images/04f5e80e-66b4-4149-85b3-11d380c95dee.jpg"
              imgAlt="Dashboard"
              label="Dashboard"
            />
            <DeviceCard
              imgSrc="https://storage.googleapis.com/banani-generated-images/generated-images/04f5e80e-66b4-4149-85b3-11d380c95dee.jpg"
              imgAlt="VDR"
              label="VDR"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-[300px] flex flex-col gap-[130px]">
          <DeviceCard
            imgSrc="https://storage.googleapis.com/banani-generated-images/generated-images/2db56b68-235b-4e3f-9ac2-f16f9139a7a2.jpg"
            imgAlt="SVDR"
            label="SVDR"
            className="self-start"
          />
          <DeviceCard
            imgSrc="https://storage.googleapis.com/banani-generated-images/generated-images/7ffd2a44-0397-4600-96c3-d7ada9d49b86.jpg"
            imgAlt="TLG"
            label="TLG"
            className="self-start"
          />
          <DeviceCard
            imgSrc="https://storage.googleapis.com/banani-generated-images/generated-images/7ffd2a44-0397-4600-96c3-d7ada9d49b86.jpg"
            imgAlt="CCTV"
            label="CCTV"
            className="self-start"
          />
        </div>
      </div>
    </div>
  );
}
