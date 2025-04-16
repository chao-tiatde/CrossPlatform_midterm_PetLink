import { useParams } from "react-router";
import { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar.jsx";
import dog from "../json/dog.json";
import cat from "../json/cat.json";
import ProductList from "../components/ProductList.jsx";
import Filter from "../components/Filter.jsx";

export default function Species() {
    const { productSpecies } = useParams();
    const data = productSpecies === "dog" ? dog : cat;

    // 篩選器狀態（改為數組）
    const [gender, setGender] = useState([]);
    const [size, setSize] = useState([]);
    const [ageRange, setAgeRange] = useState([]);

    const ageRanges = {
        "一歲以下": { min: 0, max: 1 },
        "一歲至三歲": { min: 1, max: 3 },
        "三歲至七歲": { min: 3, max: 7 },
        "七歲以上": { min: 7, max: Infinity },
    };

    function parseAge(ageText) {
        if (ageText.includes("一個月") || ageText.includes("兩個月") || ageText.includes("三個月") || ageText.includes("四個月") || ageText.includes("五個月") || ageText.includes("六個月") || ageText.includes("七個月") || ageText.includes("八個月") || ageText.includes("九個月") || ageText.includes("十個月") || ageText.includes("十一個月")) return 0;
        if (ageText.includes("一歲")) return 1;
        if (ageText.includes("一歲半")) return 1.5;
        if (ageText.includes("兩歲")) return 2;
        if (ageText.includes("一歲半")) return 2.5;
        if (ageText.includes("三歲")) return 3;
        if (ageText.includes("三歲半")) return 3.5;
        if (ageText.includes("四歲")) return 4;
        if (ageText.includes("四歲半")) return 4.5;
        if (ageText.includes("五歲")) return 5;
        if (ageText.includes("五歲半")) return 5.5;
        if (ageText.includes("六歲")) return 6;
        if (ageText.includes("六歲半")) return 6.5;
        if (ageText.includes("七歲以上")) return 7;
        return parseInt(ageText) || 0;
    }

    // 根據篩選條件過濾資料
    const filteredData = data.filter((item) => {
        const itemAge = parseAge(item.age);
        const ageMatch =
            ageRange.length === 0 ||
            ageRange.some((range) => {
                const { min, max } = ageRanges[range];
                return itemAge >= min && itemAge < max;
            });

        return (
            (gender.length === 0 || gender.includes(item.gender)) &&
            (size.length === 0 || size.includes(item.size)) &&
            ageMatch
        );
    });

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center">
                <div className="filter mt-5">
                <h1>
                    {productSpecies === "dog" ? "狗" : "貓"}
                </h1>
                </div>
            </div>

            <Filter
                gender={gender}
                size={size}
                ageRange={ageRange}
                setGender={setGender}
                setSize={setSize}
                setAgeRange={setAgeRange}
            />

            {/* 篩選結果 */}
            {filteredData.length > 0 ? (
                <ProductList products={filteredData} start={0} end={24} className="layout-content" />
            ) : (
                <div className="mt-10 ms-10 md:ms-17 lg:ms-26 xl:ms-30 flex justify-center items-center">
                    <h2>無符合的資料</h2>
                </div>
            )}
            <Outlet />
        </>
    );
}
