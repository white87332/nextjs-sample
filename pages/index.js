import { useState, useEffect, useMemo } from 'react';
import Counter from '../components/counter/counter';
import styles from '../styles/index.module.scss';

export default function Index(props)
{
    return (
        <div className={styles.index}>
            <Counter />
        </div>
    );
};

// build 的時候產生的靜態檔
// getStaticPaths 拿取全部資料, 比如所有產品id
// getStaticProps 依照所有產品id 產生所以對應的靜態頁面

/*
// 抓取該 page 所需的資料
export async function getStaticProps(context) {
    // 跟 Github 拿 user 的資料
    const res = await fetch(
    // context.params.user 就是路徑中的 [user]
    `https://api.github.com/users/${context.params.user}`);
    const data = await res.json();

    return {
        props: {
            data
        },
        revalidate: 24 * 60 * 60, // 至少 24 小時後伺服器會重新抓取資料而重新生成該頁
    };
}

// 抓取這 dynamic route 該產生的 paths
export async function getStaticPaths() {
    // 抓取 Github 的所有 users
    const res = await fetch("https://api.github.com/users");
    const data = await res.json();
    // 因為幾個 user 代表幾個 page，我不想要一次產生這麼多頁面，所以只挑前 1000 名
    const paths = data.slice(0, 1000).map((u) => ({
        params: {
            user: u.login
        }
    }));

    // 回傳該在 build time 被產生的 paths，不在這清單裡的頁面，會採取 "blocking" 方式
    return {paths, fallback: "blocking"};
}
*/

// 在 build time 的時候跑在伺服器端
// export function getServerSideProps(context) {
//     return { props: {}}
// }
