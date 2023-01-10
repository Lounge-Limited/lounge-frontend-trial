export interface User {
  id: string;
  name: string;
  avatar_url: string;
  birthdate: Date;
  registeredAt: Date;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  created_at: Date;
  updated_at: Date;
  author_uid: string;
}


export const UsersData : User[] = [
  {
    "id": "8ac99c7a-86bb-4b96-bf45-1e774869ad96",
    "name": "Reginald Doyle",
    "avatar_url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/648.jpg",
    "birthdate": new Date("2002-01-05T12:46:34.109Z"),
    "registeredAt": new Date("2022-07-01T05:43:11.419Z")
  },
  {
    "id": "8385b561-a8c2-42ed-a511-1eb3f4df901f",
    "name": "Danny Weimann",
    "avatar_url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/355.jpg",
    "birthdate": new Date("1981-06-15T18:01:08.090Z"),
    "registeredAt": new Date("2022-04-11T17:18:07.515Z")
  },
  {
    "id": "f0d8af35-caf2-4b96-9ba4-dab86a3d1f1c",
    "name": "Aaron Anderson",
    "avatar_url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1013.jpg",
    "birthdate": new Date("1979-12-10T19:42:20.442Z"),
    "registeredAt": new Date("2022-03-30T10:13:13.427Z")
  },
  {
    "id": "5ae47649-e598-4f12-a6eb-e900ba6e2900",
    "name": "Tasha Adams",
    "avatar_url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1030.jpg",
    "birthdate": new Date("1950-12-15T00:09:50.675Z"),
    "registeredAt": new Date("2022-12-29T22:02:41.451Z")
  },
  {
    "id": "aee3f489-6a55-4b8e-8665-35d7a46c7dce",
    "name": "Rolando Hackett",
    "avatar_url": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/357.jpg",
    "birthdate": new Date("1970-11-05T21:01:40.018Z"),
    "registeredAt": new Date("2022-12-20T19:42:11.654Z")
  }
];

export const PostsData : Post[] = [
  {
    "id": "57639dfc-9f43-46a5-a79f-84aac88af972",
    "title": "Hic incidunt totam debitis.",
    "content": "Fugit consequatur ex corporis labore dignissimos nihil dolorum quaerat perferendis. Excepturi pariatur iste necessitatibus nobis praesentium commodi. Adipisci tenetur repellat. Eius dolores maxime odio aspernatur esse est. Fuga libero libero impedit magni nisi perspiciatis quam odit quis.",
    "created_at": new Date("2022-01-16T15:28:05.020Z"),
    "updated_at": new Date("2022-04-11T04:30:52.810Z"),
    "author_uid": "8ac99c7a-86bb-4b96-bf45-1e774869ad96"
  },
  {
    "id": "68512ca9-cc4b-4a2b-b14f-01d75d87bbb9",
    "title": "Adipisci adipisci necessitatibus recusandae amet labore.",
    "content": "Recusandae aliquid voluptas ipsum illum quisquam similique repudiandae soluta error. Ipsum fugiat aliquid pariatur quasi asperiores at. Earum id rerum voluptates quia ducimus delectus autem sint tenetur. Fugit natus unde autem sunt aut. Blanditiis provident atque beatae voluptate. Consectetur officia nostrum voluptatum minus praesentium.",
    "created_at": new Date("2022-02-04T01:24:52.315Z"),
    "updated_at": new Date("2022-09-01T09:40:16.519Z"),
    "author_uid": "8ac99c7a-86bb-4b96-bf45-1e774869ad96"
  },
  {
    "id": "94aa7b5a-5cab-4124-9c39-c11d3fd10a82",
    "title": "Ad iure harum dolor inventore autem sint fugiat.",
    "content": "Blanditiis sunt necessitatibus voluptatem corporis. Praesentium illo fugit ad. Ea praesentium eius totam nemo similique perspiciatis adipisci similique voluptas. Aliquam nostrum est laudantium amet. Incidunt incidunt neque provident est.",
    "created_at": new Date("2022-06-06T08:26:12.706Z"),
    "updated_at": new Date("2022-02-01T17:12:03.869Z"),
    "author_uid": "8ac99c7a-86bb-4b96-bf45-1e774869ad96"
  },
  {
    "id": "eadd948d-c480-4e19-9fa4-d71593817399",
    "title": "Atque dolorum quas autem hic adipisci voluptas qui autem.",
    "content": "Doloremque perspiciatis quidem suscipit iste. Laboriosam similique quibusdam molestias nulla maxime quo. Nihil iste culpa quas qui tenetur. Impedit recusandae reiciendis maxime natus commodi dignissimos molestiae magnam nulla.",
    "created_at": new Date("2022-11-19T17:03:49.072Z"),
    "updated_at": new Date("2022-04-17T01:10:46.962Z"),
    "author_uid": "8385b561-a8c2-42ed-a511-1eb3f4df901f"
  },
  {
    "id": "0ea7479d-6067-4172-9084-988250a74ece",
    "title": "Expedita fuga dolor ea voluptas cumque.",
    "content": "Voluptatibus asperiores amet voluptatem doloribus odit ratione dolores architecto. Nihil quod earum dicta officia error quos nobis. Dignissimos unde harum quis incidunt molestiae voluptatem deserunt temporibus. Voluptatum reiciendis eius numquam eligendi deserunt magni. Reprehenderit ipsa dolore occaecati harum fugiat. Voluptatem quasi asperiores ipsam.",
    "created_at": new Date("2022-08-24T02:18:01.510Z"),
    "updated_at": new Date("2023-01-02T15:24:18.080Z"),
    "author_uid": "8385b561-a8c2-42ed-a511-1eb3f4df901f"
  },
  {
    "id": "10e4e1e7-8303-4075-b33a-a22791d8b078",
    "title": "Libero ex nulla magni ipsa.",
    "content": "Aliquam necessitatibus laudantium delectus corrupti. Ea optio fugiat itaque magni. Est corporis doloribus perspiciatis ipsa at aspernatur similique illum esse.",
    "created_at": new Date("2022-07-20T18:21:27.841Z"),
    "updated_at": new Date("2022-02-27T16:49:40.510Z"),
    "author_uid": "8385b561-a8c2-42ed-a511-1eb3f4df901f"
  },
  {
    "id": "38e588e9-1728-4aef-b998-1cc49d3ef647",
    "title": "Soluta voluptate earum.",
    "content": "Ad nostrum aliquid. Consequatur est repellat eum ipsam. Deserunt veniam nobis.",
    "created_at": new Date("2022-04-13T01:22:33.538Z"),
    "updated_at": new Date("2022-09-13T23:37:46.061Z"),
    "author_uid": "f0d8af35-caf2-4b96-9ba4-dab86a3d1f1c"
  },
  {
    "id": "b80cdef6-689b-4d08-a96b-e5ac4a010d00",
    "title": "Ducimus minus perspiciatis nesciunt mollitia odit.",
    "content": "Corrupti quae tempore. Delectus commodi quod. Et voluptatem illo dignissimos. Minus ad sapiente error earum laborum ipsum. Ut quidem incidunt ipsum placeat ducimus ratione ipsum.",
    "created_at": new Date("2022-10-17T16:03:43.068Z"),
    "updated_at": new Date("2022-08-17T03:35:13.405Z"),
    "author_uid": "f0d8af35-caf2-4b96-9ba4-dab86a3d1f1c"
  },
  {
    "id": "dea34d81-c488-4b19-a99a-80595c089e13",
    "title": "Sit quasi tempore dolores eaque non occaecati dolorem placeat.",
    "content": "Ut ab voluptas deserunt ipsum. Laborum quidem omnis labore harum occaecati aut accusamus laudantium repudiandae. Ipsum amet nostrum natus. Aperiam amet totam eos suscipit provident voluptatem delectus illum repellendus.",
    "created_at": new Date("2022-05-20T15:45:11.334Z"),
    "updated_at": new Date("2022-07-03T09:29:49.168Z"),
    "author_uid": "f0d8af35-caf2-4b96-9ba4-dab86a3d1f1c"
  },
  {
    "id": "b6099031-c19a-44eb-972c-0e16aef02e4c",
    "title": "Dolore vitae laboriosam nemo porro tempore exercitationem veritatis fugiat dolor.",
    "content": "Reiciendis eaque adipisci itaque. Recusandae quis vero fugit soluta. Temporibus modi ipsum.",
    "created_at": new Date("2022-09-10T16:23:58.666Z"),
    "updated_at": new Date("2022-03-26T20:06:53.021Z"),
    "author_uid": "5ae47649-e598-4f12-a6eb-e900ba6e2900"
  },
  {
    "id": "a1d8b881-04da-4a93-b62f-d43a299cc054",
    "title": "Aliquam sed eum.",
    "content": "Natus maiores doloribus. Nemo qui alias magnam autem praesentium. Ipsum qui vitae nam dolores unde id fugit. Facilis debitis reprehenderit natus distinctio. Adipisci sapiente exercitationem quos voluptatem.",
    "created_at": new Date("2022-05-25T08:21:23.373Z"),
    "updated_at": new Date("2022-06-04T15:37:14.921Z"),
    "author_uid": "5ae47649-e598-4f12-a6eb-e900ba6e2900"
  },
  {
    "id": "1437c1a9-3944-4ddb-86bf-24bdd0c5e19b",
    "title": "Delectus itaque minima facilis assumenda.",
    "content": "Temporibus rem dolores ducimus eveniet sequi ipsam labore voluptatum accusamus. Totam autem eveniet aspernatur deleniti non reiciendis harum optio earum. Harum at modi reprehenderit velit temporibus earum nisi dicta labore.",
    "created_at": new Date("2022-06-17T19:28:42.902Z"),
    "updated_at": new Date("2022-12-09T04:21:28.838Z"),
    "author_uid": "5ae47649-e598-4f12-a6eb-e900ba6e2900"
  },
  {
    "id": "0c38557f-be18-479f-8f2d-7678b80b95cb",
    "title": "Ea tenetur deserunt atque accusantium enim.",
    "content": "Placeat nemo pariatur. Eum velit minus animi consequatur alias fugit officia quis. Odio sapiente exercitationem consequuntur. Ducimus placeat at corporis atque consequatur eveniet mollitia impedit beatae. At totam neque molestiae cumque temporibus illum dolorum eveniet odit.",
    "created_at": new Date("2022-07-12T19:04:42.174Z"),
    "updated_at": new Date("2022-11-19T22:50:35.408Z"),
    "author_uid": "aee3f489-6a55-4b8e-8665-35d7a46c7dce"
  },
  {
    "id": "973fa992-9933-47d4-be5e-631bd5961a99",
    "title": "Ducimus voluptate tempore ad.",
    "content": "Quia nam quis quo alias at distinctio esse assumenda hic. Eum inventore suscipit cum esse perferendis quae pariatur. Nihil quam corrupti accusamus assumenda quibusdam fuga. Voluptatum blanditiis atque. Assumenda dolorum ab.",
    "created_at": new Date("2022-05-10T19:12:17.125Z"),
    "updated_at": new Date("2023-01-06T07:34:46.372Z"),
    "author_uid": "aee3f489-6a55-4b8e-8665-35d7a46c7dce"
  },
  {
    "id": "4ee87e99-6b9b-452a-a091-c29b0e0c3238",
    "title": "Architecto ullam veritatis dolor id praesentium.",
    "content": "Optio accusamus commodi ipsam dolorum natus corporis rerum beatae dolorem. Nihil cupiditate ea. Veniam a culpa blanditiis culpa consectetur ab harum.",
    "created_at": new Date("2022-04-20T03:29:59.727Z"),
    "updated_at": new Date("2022-08-07T07:05:05.410Z"),
    "author_uid": "aee3f489-6a55-4b8e-8665-35d7a46c7dce"
  }
]
