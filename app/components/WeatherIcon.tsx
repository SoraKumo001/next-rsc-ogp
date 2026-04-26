import React from "react";

interface WeatherIconProps {
  code: string;
  className?: string;
}

export function WeatherIcon({ code, className }: WeatherIconProps) {
  // 簡易的な気象コードと絵文字のマッピング
  // 詳細は気象庁のドキュメントを参照
  const getIcon = (code: string) => {
    if (code.startsWith("1")) return "☀️"; // 晴
    if (code.startsWith("2")) return "☁️"; // 曇
    if (code.startsWith("3")) return "☔"; // 雨
    if (code.startsWith("4")) return "❄️"; // 雪
    return "❓";
  };

  const getGradient = (code: string) => {
    if (code.startsWith("1")) return "from-orange-400 to-yellow-300";
    if (code.startsWith("2")) return "from-slate-400 to-gray-300";
    if (code.startsWith("3")) return "from-blue-600 to-indigo-400";
    if (code.startsWith("4")) return "from-blue-200 to-white";
    return "from-gray-500 to-gray-400";
  };

  return (
    <div
      className={`flex items-center justify-center rounded-2xl bg-gradient-to-br ${getGradient(code)} ${className} shadow-lg`}
    >
      <span className="text-4xl filter drop-shadow-md">{getIcon(code)}</span>
    </div>
  );
}
