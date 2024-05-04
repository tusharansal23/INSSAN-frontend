import '../css/Structure.css';
import structure from '../img/structure.jpg';

const Structure = () => {

    return (

        <>
            <div class="container structure-max-width">
                <div class="row g-5 align-items-center">
                <img className="p-inpx-0 w-100" src={structure} alt=""/>
                </div>
            </div>

            <div class="container structure-max-width">
                <div class="row g-5 align-items-center">
        <table className="table-color">
            <tbody>
                {/* First row */}
                <tr>
                    {/* First column */}
                    <td className='p-inpx-0'>
                        <div className="nested-cell structure-bg large-box">
                            <div className="western-chapter">WESTERN CHAPTER</div>
                            <div className="pune">PUNE</div></div>
                    </td>
                    {/* Second column */}
                    <td className='p-inpx-0'>
                        <div className="nested-cell western-chapter structure-bg lower-medium-box">Chairman</div>
                        <div className="nested-cell lower-medium-box">Hon. Secretary</div>
                    </td>
                    {/* Third column */}
                    <td className='p-inpx-0'>
                        <div className="nested-cell structure-bg lower-medium-box">
                        <div className="western-chapter">Mr. Parag G Auty</div>
                            <div className="pune">Tata Motors Ltd. CVBU, Pune</div></div>
                        <div className="nested-cell lower-medium-box">
                            <div>Mr. Mangesh Ashtekar</div>
                            <div>Forbes Marshall Ltd. Pune</div></div>
                    </td>
                </tr>

                {/* Second row */}
                <tr>
                    {/* First column */}
                    <td className='p-inpx-0'>
                        <div className="nested-cell structure-bg large-box">
                            <div className="western-chapter">EASTERN CHAPTER</div>
                            <div className="pune">JAMSHEDPUR</div>
                        </div>
                        
                    </td>
                    {/* Second column */}
                    <td className='p-inpx-0'>
                        <div className="nested-cell lower-medium-box">Chairman</div>
                        <div className="nested-cell lower-medium-box">Hon. Secretary</div>
                    </td>
                    {/* Third column */}
                    <td className='p-inpx-0'>
                        <div className="nested-cell lower-medium-box">
                            <div>Mr. Sudhanshu Pathak</div>
                            <div>Tata Steel Ltd. Jamshedpur</div>
                        </div>
                        <div className="nested-cell lower-medium-box">
                        <div>Mr. Rupesh Kumar Sinha</div>
                            <div>Tata Steel Ltd. Jamshedpur</div>
                        </div>
                    </td>
                </tr>

                {/* Third row */}
                <tr>
                    {/* First column */}
                    <td className='p-inpx-0'>
                        <div className="nested-cell structure-bg large-box">
                        <div className="western-chapter">SOUTHERN CHAPTER</div>
                            <div className="pune">JAMSHEDPUR</div>
                        </div>
                    </td>
                    {/* Second column */}
                    <td className='p-inpx-0'>
                        <div className="nested-cell small-box">Chairman</div>
                        <div className="nested-cell medium-box">Hon. Secretary</div>
                    </td>
                    {/* Third column */}
                    <td className='p-inpx-0'>
                        <div className="nested-cell large-box">
                        <div>Mr. S. Natarajan</div>
                            <div>Ex. SAIL-Steel Plant, Salem</div>
                        </div>
                    </td>
                </tr>

                {/* Fourth row */}
                <tr>
                    {/* First column */}
                    <td className='p-inpx-0'>
                        <div className="nested-cell structure-bg extra-large-box">
                        <div className="western-chapter">AURANGABAD </div>
                            <div className="pune">CHAPTER</div>
                        </div>
                    </td>
                    {/* Second column */}
                    <td className='p-inpx-0'>
                        <div className="nested-cell less-large-box">Chairman</div>
                        <div className="nested-cell lower-medium-box">Hon. Secretary</div>
                    </td>
                    {/* Third column */}
                    <td className='p-inpx-0'>
                        <div className="nested-cell less-large-box">
                        <div>Mr. Madan Rajput</div>
                            <div>OMR Bagla Automotive Systems India Ltd. </div>
                            <div>Aurangabad</div>
                        </div>
                        <div className="nested-cell lower-medium-box">
                        <div>Prof. Dr. Deepa Deshpande</div>
                            <div>JNEC, Aurangabad</div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>

        </>
    );
};
export default Structure;