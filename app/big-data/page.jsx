import PageHero from "../../components/PageHero";

export const metadata = {
  title: "Big Data - ESG",
  description:
    "Big Data technologies helping users handle Big Data in a cost-effective manner.",
};

const BIG_DATA_TECHNOLOGIES = [
  {
    name: "Column-oriented databases",
    text: "Traditional, row-oriented databases are excellent for online transaction processing with high update speeds, but they fall short on query performance as the data volumes grow and as data becomes more unstructured. Column-oriented databases store data with a focus on columns, instead of rows, allowing for huge data compression and very fast query times. The downside to these databases is that they will generally only allow batch updates, having a much slower update time than traditional models.",
  },
  {
    name: "Schema-less databases, or NoSQL databases",
    text: "There are several database types that fit into this category, such as key-value stores and document stores, which focus on the storage and retrieval of large volumes of unstructured, semi-structured, or even structured data. They achieve performance gains by doing away with some (or all) of the restrictions traditionally associated with conventional databases, such as read-write consistency, in exchange for scalability and distributed processing.",
  },
  {
    name: "Hadoop",
    text: "Hadoop is by far the most popular implementation of MapReduce, being an entirely open source platform for handling Big Data. It is flexible enough to be able to work with multiple data sources, either aggregating multiple sources of data in order to do large scale processing, or even reading data from a database in order to run processor-intensive machine learning jobs. It has several different applications, but one of the top use cases is for large volumes of constantly changing data, such as location-based data from weather or traffic sensors, web-based or social media data, or machine-to-machine transactional data.",
  },
  {
    name: "Hive",
    text: 'Hive is a "SQL-like" bridge that allows conventional BI applications to run queries against a Hadoop cluster. It was developed originally by Facebook, but has been made open source for some time now, and it\'s a higher-level abstraction of the Hadoop framework that allows anyone to make queries against data stored in a Hadoop cluster just as if they were manipulating a conventional data store. It amplifies the reach of Hadoop, making it more familiar for BI users.',
  },
  {
    name: "WibiData",
    text: "WibiData is a combination of web analytics with Hadoop, being built on top of HBase, which is itself a database layer on top of Hadoop. It allows web sites to better explore and work with their user data, enabling real-time responses to user behavior, such as serving personalized content, recommendations and decisions.",
  },
  {
    name: "SkyTree",
    text: "SkyTree is a high-performance machine learning and data analytics platform focused specifically on handling Big Data. Machine learning, in turn, is an essential part of Big Data, since the massive data volumes make manual exploration, or even conventional automated exploration methods unfeasible or too expensive.",
  },
];

export default function BigDataPage() {
  return (
    <>
      <PageHero
        title="Big Data"
        subtitle="Technology forward. Always two steps ahead."
        image="/img/bigdata_small.jpg"
      />
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-brand sm:text-3xl">Big Data</h2>
            <div className="mb-8 h-1 w-16 bg-accent" />
            <p className="text-gray-700">
              While the topic of Big Data is broad and encompasses many trends and new
              technology developments, a very good overview of what is considered to be
              the top few emerging technologies that are helping users handle Big Data in
              a cost-effective manner.
            </p>
            <p className="mt-6 font-semibold text-gray-800">
              Some technologies of Big Data:
            </p>

            <div className="mt-4 space-y-6">
              {BIG_DATA_TECHNOLOGIES.map(({ name, text }) => (
                <div key={name}>
                  <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                  <p className="mt-2 text-gray-700">{text}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-gray-700">
              Big Data and cloud computing go hand-in-hand. Cloud computing enables
              companies of all sizes to get more value from their data than ever before,
              by enabling blazing-fast analytics at a fraction of previous costs. This,
              in turn drives companies to acquire and store even more data, creating more
              need for processing power and driving a virtuous circle.
            </p>
          </div>
          <div className="md:col-span-1">
            <img
              src="/img/bigdata_small.jpg"
              alt="Big Data"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </>
  );
}
