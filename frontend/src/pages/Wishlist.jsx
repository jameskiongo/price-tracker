function Wishlist() {
  return (
    <section className="container mx-auto  md:pt-0 flex flex-col justify-center items-center">
      <div className="overflow-x-auto my-24">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Updated at</th>
              <th>Name</th>
              <th>Price</th>
              <th>Price Change</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>Sun, 03 march 2024 08:37:23 NBI</td>
              <td>
                Sony WH-1000XM4 Wireless Premium Noise Canceling Overhead
                Headphones with Mic for Phone-Call and Alexa Voice Control,
                Black WH1000XM4
              </td>
              <td>$12.99</td>
              <td>0%</td>
              <th>View</th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>Sun, 03 march 2024 08:37:23 NBI</td>
              <td>
                Sony WH-1000XM4 Wireless Premium Noise Canceling Overhead
                Headphones with Mic for Phone-Call and Alexa Voice Control,
                Black WH1000XM4
              </td>
              <td>$12.99</td>
              <td>0%</td>
              <th>View</th>
            </tr>
            {/* row 3 */}
            <tr>
              <td>Sun, 03 march 2024 08:37:23 NBI</td>
              <td>
                Sony WH-1000XM4 Wireless Premium Noise Canceling Overhead
                Headphones with Mic for Phone-Call and Alexa Voice Control,
                Black WH1000XM4
              </td>
              <td>$12.99</td>
              <td>0%</td>
              <th>View</th>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Wishlist;
