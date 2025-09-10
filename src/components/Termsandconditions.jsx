import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-purple-900 via-pink-800 to-purple-900 text-white py-12 px-6 text-center relative">
        <h1 className="text-4xl md:text-5xl font-bold">Terms and Conditions</h1>
        <button className="absolute top-6 right-6 bg-white text-gray-900 text-sm font-medium px-3 py-1 rounded shadow hover:bg-gray-100 transition">
          Share
        </button>
      </header>

      {/* Content Section */}
      <main className="max-w-4xl mx-auto px-6 py-12 leading-relaxed">
        <p className="mb-6">
          Welcome to our AI Interview Platform. By accessing or using our
          website and application, you agree to comply with and be bound by
          these Terms and Conditions. If you do not agree, please refrain from
          using our services.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">
          1. Use of Services
        </h2>
        <p className="mb-6">
          Our platform provides AI-driven tools to help candidates prepare for
          interviews. You agree to use these services only for lawful purposes
          and not for fraudulent, harmful, or unauthorized activities.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">
          2. Account Registration
        </h2>
        <p className="mb-6">
          To access certain features, you may need to create an account. You are
          responsible for maintaining the confidentiality of your account
          credentials and for all activities that occur under your account.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">
          3. Privacy and Data Collection
        </h2>
        <p className="mb-6">
          We collect personal information such as your name, email, and activity
          data to improve our services. By using the platform, you consent to
          our data practices outlined in our Privacy Policy.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">
          4. Content Ownership
        </h2>
        <p className="mb-6">
          All materials, AI-generated content, and platform features are owned
          by us. You may not copy, modify, distribute, or exploit our content
          without written permission.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">
          5. Limitations of Use
        </h2>
        <p className="mb-6">
          You may not use the platform to harass others, attempt to gain
          unauthorized access, or misuse AI features for unfair advantages in
          recruitment processes.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">
          6. Termination
        </h2>
        <p className="mb-6">
          We reserve the right to suspend or terminate your account if you
          breach these Terms and Conditions or misuse our platform.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">
          7. Disclaimer of Liability
        </h2>
        <p className="mb-6">
          While we strive to provide accurate AI interview experiences, we do
          not guarantee job placements or specific outcomes. The platform is a
          preparation tool, not a hiring guarantee.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">
          8. Changes to Terms
        </h2>
        <p className="mb-6">
          We may update these Terms and Conditions from time to time. Continued
          use of the platform means you accept any revised terms.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">
          9. Contact Us
        </h2>
        <p className="mb-6">
          If you have any questions about these Terms and Conditions, please
          contact us at{" "}
          <a
            href="mailto:support@aiinterview.com"
            className="text-purple-700 underline"
          >
            support@aiinterview.com
          </a>
          .
        </p>
      </main>
    </div>
  );
};

export default TermsAndConditions;
