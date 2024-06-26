import { JetElement, JetElementCustomEvent, JetSetPropertyType, JetSettableProperties } from "..";
import { dvtBaseComponent, dvtBaseComponentEventMap, dvtBaseComponentSettableProperties } from "../ojdvt-base";
import { Converter } from "../ojvalidation-base";
export interface ojTimeAxis extends dvtBaseComponent<ojTimeAxisSettableProperties> {
    converter: ojTimeAxis.Converters | Converter<string>;
    end: string;
    scale: "seconds" | "minutes" | "hours" | "days" | "weeks" | "months" | "quarters" | "years";
    start: string;
    translations: {
        componentName?: string | undefined;
        labelAndValue?: string | undefined;
        labelClearSelection?: string | undefined;
        labelCountWithTotal?: string | undefined;
        labelDataVisualization?: string | undefined;
        labelInvalidData?: string | undefined;
        labelNoData?: string | undefined;
        stateCollapsed?: string | undefined;
        stateDrillable?: string | undefined;
        stateExpanded?: string | undefined;
        stateHidden?: string | undefined;
        stateIsolated?: string | undefined;
        stateMaximized?: string | undefined;
        stateMinimized?: string | undefined;
        stateSelected?: string | undefined;
        stateUnselected?: string | undefined;
        stateVisible?: string | undefined;
    };
    onConverterChanged: ((event: JetElementCustomEvent<ojTimeAxis["converter"]>) => any) | null;
    onEndChanged: ((event: JetElementCustomEvent<ojTimeAxis["end"]>) => any) | null;
    onScaleChanged: ((event: JetElementCustomEvent<ojTimeAxis["scale"]>) => any) | null;
    onStartChanged: ((event: JetElementCustomEvent<ojTimeAxis["start"]>) => any) | null;
    addEventListener<T extends keyof ojTimeAxisEventMap>(
        type: T,
        listener: (this: HTMLElement, ev: ojTimeAxisEventMap[T]) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojTimeAxisSettableProperties>(property: T): ojTimeAxis[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojTimeAxisSettableProperties>(
        property: T,
        value: ojTimeAxisSettableProperties[T],
    ): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojTimeAxisSettableProperties>): void;
    setProperties(properties: ojTimeAxisSettablePropertiesLenient): void;
}
export interface ojTimeAxisEventMap extends dvtBaseComponentEventMap<ojTimeAxisSettableProperties> {
    "converterChanged": JetElementCustomEvent<ojTimeAxis["converter"]>;
    "endChanged": JetElementCustomEvent<ojTimeAxis["end"]>;
    "scaleChanged": JetElementCustomEvent<ojTimeAxis["scale"]>;
    "startChanged": JetElementCustomEvent<ojTimeAxis["start"]>;
}
export interface ojTimeAxisSettableProperties extends dvtBaseComponentSettableProperties {
    converter: ojTimeAxis.Converters | Converter<string>;
    end: string;
    scale: "seconds" | "minutes" | "hours" | "days" | "weeks" | "months" | "quarters" | "years";
    start: string;
    translations: {
        componentName?: string | undefined;
        labelAndValue?: string | undefined;
        labelClearSelection?: string | undefined;
        labelCountWithTotal?: string | undefined;
        labelDataVisualization?: string | undefined;
        labelInvalidData?: string | undefined;
        labelNoData?: string | undefined;
        stateCollapsed?: string | undefined;
        stateDrillable?: string | undefined;
        stateExpanded?: string | undefined;
        stateHidden?: string | undefined;
        stateIsolated?: string | undefined;
        stateMaximized?: string | undefined;
        stateMinimized?: string | undefined;
        stateSelected?: string | undefined;
        stateUnselected?: string | undefined;
        stateVisible?: string | undefined;
    };
}
export interface ojTimeAxisSettablePropertiesLenient extends Partial<ojTimeAxisSettableProperties> {
    [key: string]: any;
}
export namespace ojTimeAxis {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    type Converters = {
        default?: Converter<string> | undefined;
        seconds?: Converter<string> | undefined;
        minutes?: Converter<string> | undefined;
        hours?: Converter<string> | undefined;
        days?: Converter<string> | undefined;
        weeks?: Converter<string> | undefined;
        months?: Converter<string> | undefined;
        quarters?: Converter<string> | undefined;
        years?: Converter<string> | undefined;
    };
}
