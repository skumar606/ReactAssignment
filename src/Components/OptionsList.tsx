import * as React from "react";

interface Option {
    id?: number,
    value?: string,
    isChecked?: boolean
}

interface Props {
    flag: boolean[],
    options: Option[],
    onInputChange: any
}

class OptionsList extends React.Component<Props> {
    render() {
        return (
            <div className="pl-3">
                {
                    this.props.options.map((option, index) => {
                        return (
                            <div key={option.id} className="form-check"> 
                                <input className="form-check-input" 
                                type="checkbox" 
                                data-index={index+1} 
                                onChange={this.props.onInputChange} 
                                checked={this.props.flag[index]} />

                                <label className="form-check-label">{option.value}</label>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default OptionsList