import * as Meta from "../meta/index";
import type { Process } from "../process";
export declare type Configure = <B extends Batch>(options: Options<B>) => <I extends Input<B>, O extends Output<B>>(inputs: Inputs<B, I>) => Process<Outputs<B, O>>;
export declare const configure: Configure;
export declare type Batch = Meta.Batch.Batch;
export declare type Options<B extends Meta.Batch.Batch> = Meta.Batch.Options<B>;
export declare type Input<B extends Meta.Batch.Batch> = Meta.Batch.Input<B>;
export declare type Inputs<B extends Meta.Batch.Batch, I extends Input<B>> = Meta.Batch.Inputs<B, I>;
export declare type Output<B extends Meta.Batch.Batch> = Meta.Batch.Output<B>;
export declare type Outputs<B extends Meta.Batch.Batch, O extends Output<B>> = Meta.Batch.Outputs<B, O>;
