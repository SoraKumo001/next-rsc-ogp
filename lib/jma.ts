export interface Area {
  name: string;
  enName: string;
  officeCode: string;
}

export interface JmaAreaResponse {
  offices: Record<string, { name: string; enName: string; officeCode: string }>;
}

export interface ForecastData {
  publishingOffice: string;
  reportDatetime: string;
  timeSeries: {
    timeDefines: string[];
    areas: {
      area: { name: string; code: string };
      weatherCodes?: string[];
      weathers?: string[];
      winds?: string[];
      waves?: string[];
      pops?: string[];
      temps?: string[];
    }[];
  }[];
}

export async function getAreaList(): Promise<Area[]> {
  const res = await fetch("https://www.jma.go.jp/bosai/common/const/area.json");
  if (!res.ok) throw new Error("Failed to fetch area list");
  const data: JmaAreaResponse = await res.json();
  return Object.entries(data.offices).map(([code, office]) => ({
    officeCode: code,
    name: office.name,
    enName: office.enName,
  }));
}

export async function getForecast(code: string): Promise<ForecastData[]> {
  const res = await fetch(`https://www.jma.go.jp/bosai/forecast/data/forecast/${code}.json`);
  if (!res.ok) throw new Error("Failed to fetch forecast data");
  return res.json();
}
