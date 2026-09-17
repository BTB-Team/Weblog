const BranchDecoration = () => {
  return (
    <svg
      viewBox="0 0 180 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        start-[-55px]
        top-1/2
        z-10
        h-[280px]
        w-[165px]
        -translate-y-1/2
        opacity-80
        ltr:scale-x-100
        rtl:-scale-x-100
      "
    >
      {/* Main branch */}
      <path
        d="M145 285C126 253 119 224 120 194C121 163 139 139 126 110C116 87 91 69 63 48"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Upper branch */}
      <path
        d="M126 111C105 104 83 91 66 72"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Lower branch */}
      <path
        d="M121 194C99 181 78 165 62 145"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Top leaves */}
      <path
        d="M68 74C55 67 47 57 45 46C56 48 66 56 68 74Z"
        fill="currentColor"
      />

      <path
        d="M86 91C75 88 67 81 62 71C73 71 82 77 86 91Z"
        fill="currentColor"
      />

      <path
        d="M102 101C94 94 91 85 92 76C101 81 106 90 102 101Z"
        fill="currentColor"
      />

      {/* Middle leaves */}
      <path
        d="M124 117C111 113 103 105 100 95C111 97 120 104 124 117Z"
        fill="currentColor"
      />

      <path
        d="M119 139C106 136 97 128 93 117C105 120 114 127 119 139Z"
        fill="currentColor"
      />

      <path
        d="M115 158C103 158 93 152 87 142C99 142 109 148 115 158Z"
        fill="currentColor"
      />

      {/* Lower leaves */}
      <path
        d="M105 181C93 178 84 170 80 160C92 163 101 170 105 181Z"
        fill="currentColor"
      />

      <path
        d="M119 202C106 201 96 195 89 186C101 186 111 192 119 202Z"
        fill="currentColor"
      />

      <path
        d="M123 225C111 225 101 220 94 211C106 211 116 216 123 225Z"
        fill="currentColor"
      />

      {/* Small side branches */}
      <path
        d="M67 73C55 78 47 84 42 94"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      <path
        d="M62 145C50 145 40 149 32 158"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      <path
        d="M80 160C68 164 59 171 53 181"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      {/* Side leaves */}
      <path
        d="M45 94C34 91 27 84 25 75C35 77 43 83 45 94Z"
        fill="currentColor"
      />

      <path
        d="M32 158C21 155 14 148 12 139C22 141 29 148 32 158Z"
        fill="currentColor"
      />

      <path
        d="M53 181C42 179 34 173 31 164C41 166 49 172 53 181Z"
        fill="currentColor"
      />

      {/* Small buds */}
      <circle cx="42" cy="94" r="3.2" fill="currentColor" />
      <circle cx="25" cy="75" r="2.8" fill="currentColor" />
      <circle cx="32" cy="158" r="3" fill="currentColor" />
      <circle cx="31" cy="164" r="2.5" fill="currentColor" />
    </svg>
  );
};

export default BranchDecoration;
